import { createContext, useContext, useEffect, useState } from "react";
import { io } from "socket.io-client";

const NotificationContext = createContext();

export default function NotificationProvider({ children }) {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    

    const token = localStorage.getItem("token");
    const userId = localStorage.getItem("userId");

    

    if (!token || !userId) {
      
      return;
    }

    
    const SERVER_URL = "http://localhost:5000";

    // Step 1: Fetch Existing Notifications
    fetch(`${SERVER_URL}/api/notifications`, {
      headers: { Authorization: `Bearer ${token}` }
    })
      .then(res => res.json())
      .then(data => {
        
        setNotifications(data);
      })
      .catch(err => console.error("❌ Error fetching notifications:", err));

    // Step 2: Socket Connection for Live Updates
    const socket = io(SERVER_URL, {
      auth: { token },
      transports: ["websocket"],
    });

    socket.on("connect", () => {
      
      socket.emit("join", userId);
    });

    socket.on("newNotification", (data) => {
    
      setNotifications((prev) => [data, ...prev]);
    });

    socket.on("disconnect", (reason) => {
      
    });

    socket.on("connect_error", (error) => {
      
    });

    return () => socket.disconnect();
  }, []);

  return (
    <NotificationContext.Provider value={{ notifications, setNotifications }}>
      {children}
    </NotificationContext.Provider>
  );
}

export const useNotifications = () => useContext(NotificationContext);
