import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Logout() {
  const navigate = useNavigate();

  useEffect(() => {
    const logoutUser = async () => {
      const token = localStorage.getItem("token");

      try {
        await fetch("http://localhost:5000/api/logout", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });
      } catch (error) {
        console.error("Logout Error:", error);
      }

      // Frontend cleanup
      localStorage.removeItem("token");
      localStorage.removeItem("role");
      localStorage.removeItem("user");

      navigate("/login");
    };

    logoutUser();
  }, [navigate]);

  return (
    <div className="h-screen flex justify-center items-center">
      <h2 className="text-xl font-semibold">Logging you out...</h2>
    </div>
  );
}
