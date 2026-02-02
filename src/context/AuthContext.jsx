import React, { createContext, useContext, useState, useEffect } from "react";
import { auth, signInWithGoogle } from "../firebase";
import { signOut } from "firebase/auth";

const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const setCookie = (name, value, hours) => {
    const expires = new Date(Date.now() + hours * 60 * 60 * 1000).toUTCString();
    document.cookie = `${name}=${encodeURIComponent(value)}; expires=${expires}; path=/`;
  };

  const getCookie = (name) => {
    const match = document.cookie.match(new RegExp("(^| )" + name + "=([^;]+)"));
    return match ? decodeURIComponent(match[2]) : null;
  };

  const deleteCookies = () => {
    document.cookie.split(";").forEach((c) => {
      document.cookie =
        c.replace(/^ +/, "").replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/");
    });
  };

  const loginWithGoogleHandler = async () => {
    try {
      const res = await signInWithGoogle();

      // Make sure photo is always set
      const hdPhoto =
        res.photoURL && res.photoURL !== ""
          ? `${res.photoURL}?sz=200`
          : "https://via.placeholder.com/150";

      const newUser = {
        uid: res.uid,
        displayName: res.displayName || "No Name",
        photo: hdPhoto,
        token: res.accessToken,
      };

      setUser(newUser);

      // Save cookies
      setCookie("uid", newUser.uid, 2);
      setCookie("displayName", newUser.displayName, 2);
      setCookie("photo", newUser.photo, 2);
      setCookie("accessToken", newUser.token, 2);

      // ---- Add these lines right here ----
    localStorage.setItem("accessToken_time", new Date());
    localStorage.setItem("uid_time", new Date());
    localStorage.setItem("displayName_time", new Date());
    localStorage.setItem("photo_time", new Date());
    
    } catch (err) {
      console.error("Google login failed:", err.message);
    }
  };

  const logout = async () => {
    try {
      await signOut(auth);
      setUser(null);
      deleteCookies();
    } catch (err) {
      console.error("Logout failed:", err.message);
    }
  };

  // Restore user from cookies
  useEffect(() => {
    const uid = getCookie("uid");
    const displayName = getCookie("displayName");
    const photo = getCookie("photo");
    const token = getCookie("accessToken");

    if (uid && displayName && photo && token) {
      setUser({ uid, displayName, photo, token });
    }
  }, []);

  // Listen to Firebase auth changes
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((firebaseUser) => {
      if (!firebaseUser) {
        setUser(null);
        deleteCookies();
      }
    });
    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        loginWithGoogle: loginWithGoogleHandler,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
