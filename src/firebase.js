import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyChgbSkpPM1BadS7GMzAxWjaAiMTvLuvZA",
  authDomain: "web-app-9b914.firebaseapp.com",
  projectId: "web-app-9b914",
  storageBucket: "web-app-9b914.appspot.com",
  messagingSenderId: "436701738709",
  appId: "1:436701738709:web:b04b76874463f8d4a8945c",
  measurementId: "G-XEKVQD3ZMZ"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();

export const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, provider);
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    const user = result.user;
    return {
      uid: user.uid,
      displayName: user.displayName,
      photoURL: user.photoURL,
      accessToken: token
    };
  } catch (error) {
    console.error("Google sign-in failed:", error.message);
    throw new Error(error.message);
  }
};

export default app;
