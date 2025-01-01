import { useState, useEffect } from "react";
import AuthAPI from "../api/authApi";

const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsAuthenticated(!!token);
  }, []);

  const login = async (username, password) => {
    await AuthAPI.login(username, password);
    setIsAuthenticated(true);
  };

  const logout = async () => {
    await AuthAPI.logout();
    setIsAuthenticated(false);
  };

  return { isAuthenticated, login, logout };
};

export default useAuth;
