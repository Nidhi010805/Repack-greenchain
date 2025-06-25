import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function UserSettings() {
  const [user, setUser] = useState(null);
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [passwords, setPasswords] = useState({ currentPassword: "", newPassword: "" });
  const [photo, setPhoto] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) return navigate("/login");

    fetch("http://localhost:5000/api/user/profile", {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
        setName(data.name);
        setMobile(data.mobile || "");
        setEmail(data.email);
      })
      .catch(() => navigate("/login"));
  }, [navigate]);

  const handleProfileUpdate = () => {
    const token = localStorage.getItem("token");
    if (!name || !email) return alert("Name and Email are required");

    fetch("http://localhost:5000/api/user/update", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ name, mobile, email }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) return alert(data.error);
        alert("Profile updated successfully!");
        setUser(data.user);
      })
      .catch(() => alert("Failed to update profile"));
  };

  const handlePasswordChange = () => {
    const token = localStorage.getItem("token");
    if (!passwords.currentPassword || !passwords.newPassword) {
      return alert("Please fill both password fields");
    }

    fetch("http://localhost:5000/api/user/change-password", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(passwords),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) return alert(data.error);
        alert("Password changed successfully!");
        setPasswords({ currentPassword: "", newPassword: "" });
      })
      .catch(() => alert("Failed to change password"));
  };

  const handlePhotoUpload = () => {
    if (!photo) return alert("Please select a photo");

    const token = localStorage.getItem("token");
    const formData = new FormData();
    formData.append("photo", photo);

    fetch("http://localhost:5000/api/user/upload-photo", {
      method: "POST",
      headers: { Authorization: `Bearer ${token}` },
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) return alert(data.error);
        alert("Profile photo updated!");
        setPhoto(null);
      })
      .catch(() => alert("Photo upload failed"));
  };

  if (!user) {
    return (
      <div className="h-screen flex items-center justify-center">
        <p className="text-gray-600 text-lg">Loading your settings...</p>
      </div>
    );
  }

  return (
    <div className="max-w-xl mx-auto mt-24 p-6 bg-white rounded-lg shadow">
      <h2 className="text-2xl font-bold mb-6">Account Settings</h2>

      {/* Profile Update */}
      <div className="mb-4">
        <label className="block mb-1">Name</label>
        <input
          className="w-full border px-4 py-2 rounded"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div className="mb-4">
        <label className="block mb-1">Email</label>
        <input
          className="w-full border px-4 py-2 rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className="mb-4">
        <label className="block mb-1">Mobile</label>
        <input
          className="w-full border px-4 py-2 rounded"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
        />
      </div>

      <button
        className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 mb-6"
        onClick={handleProfileUpdate}
      >
        Save Changes
      </button>

      <hr className="my-6" />

      {/* Password Change */}
      <h3 className="text-lg font-semibold mb-4">Change Password</h3>

      <div className="mb-4">
        <label className="block mb-1">Current Password</label>
        <input
          type="password"
          className="w-full border px-4 py-2 rounded"
          value={passwords.currentPassword}
          onChange={(e) => setPasswords({ ...passwords, currentPassword: e.target.value })}
        />
      </div>

      <div className="mb-4">
        <label className="block mb-1">New Password</label>
        <input
          type="password"
          className="w-full border px-4 py-2 rounded"
          value={passwords.newPassword}
          onChange={(e) => setPasswords({ ...passwords, newPassword: e.target.value })}
        />
      </div>

      <button
        className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 mb-6"
        onClick={handlePasswordChange}
      >
        Change Password
      </button>

      <hr className="my-6" />

      {/* Profile Photo Upload */}
      <h3 className="text-lg font-semibold mb-4">Profile Photo</h3>

      <input
        type="file"
        accept="image/*"
        className="mb-4"
        onChange={(e) => setPhoto(e.target.files[0])}
      />

      <button
        className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        onClick={handlePhotoUpload}
      >
        Upload Photo
      </button>
    </div>
  );
}
