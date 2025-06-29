import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";

export default function Logout() {
  const navigate = useNavigate();

  useEffect(() => {
    const logoutUser = async () => {
      try {
        await API.post("/api/logout");
      } catch (error) {
        console.error("Logout Error:", error);
      }

      // Frontend cleanup
      localStorage.removeItem("token");
      localStorage.removeItem("role");
      localStorage.removeItem("user");
      localStorage.removeItem("name");
      localStorage.removeItem("userId");
      localStorage.removeItem("cartCount");

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
