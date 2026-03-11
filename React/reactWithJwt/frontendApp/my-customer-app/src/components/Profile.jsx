import { useEffect, useState } from "react";
import API from "../api/api";

export default function Profile() {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const { data } = await API.get("/users/profile");
        setProfile(data);
      } catch (err) {
        alert("Unauthorized or error fetching profile");
      }
    };
    fetchProfile();
  }, []);

  return profile ? (
    <div>
      <h2>Welcome, {profile.username}</h2>
      <p>Email: {profile.email}</p>
    </div>
  ) : (
    <p>Loading...</p>
  );
}