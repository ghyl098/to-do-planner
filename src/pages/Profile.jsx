import React from "react";
import { useAuth } from "../context/AuthContext";

const Profile = () => {
  const { user } = useAuth();

  if (!user)
    return (
      <p style={{ textAlign: "center", marginTop: "50px" }}>
        Please login to view profile.
      </p>
    );

  return (
    <div className="profile-page">
      <img
        src={user.photo || "https://via.placeholder.com/150"}
        alt="profile"
        className="profile-img"
      />
      <h2>{user.displayName}</h2>
      <p>
        <strong>UID:</strong> {user.uid}
      </p>
      <p>
        <strong>Token:</strong> {user.token?.substring(0, 20)}...
      </p>
    </div>
  );
};

export default Profile;
