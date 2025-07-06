import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";

export default function Logout() {
  const navigate = useNavigate();

  useEffect(() => {
    const logoutUser = async () => {
      const token = localStorage.getItem("token");

      try {
        // Send logout request with token in headers
        if (token) {
          await API.post("/api/auth/logout", {}, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
        }
      } catch (error) {
        console.error("Logout Error:", error?.response?.data || error.message);
      } finally {
        // Frontend cleanup
        localStorage.clear();
        navigate("/l");
      }
    };

    logoutUser();
  }, [navigate]);

  return (
    <div className="h-screen flex justify-center items-center">
      <h2 className="text-xl font-semibold animate-pulse">Logging you out...</h2>
    </div>
  );
}
