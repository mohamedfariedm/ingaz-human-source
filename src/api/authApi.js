import axiosInstance from "./axiosInstance";

const AuthAPI = {
  login: async (username, password) => {
    const response = await axiosInstance.post("/login", { username, password });
    if (response.data.access_token) {
      localStorage.setItem("token", response.data.access_token);
    }
    return response.data;
  },
  logout: async () => {
    await axiosInstance.post("/logout");
    localStorage.removeItem("token");
  },
  changePassword: async (currentPassword, newPassword) => {
    const response = await axiosInstance.post("/change-password", {
      current_password: currentPassword,
      password: newPassword,
      password_confirmation: newPassword,
    });
    return response.data;
  },
  resetPassword: async (username) => {
    const response = await axiosInstance.post("/reset", { username });
    return response.data;
  },
  checkCode: async (username, code) => {
    const response = await axiosInstance.post("/check-code", { username, code });
    return response.data;
  },
  confirmReset: async (username, password, passwordConfirmation) => {
    const response = await axiosInstance.post("/confirm-reset", {
      username,
      password,
      password_confirmation: passwordConfirmation,
    });
    return response.data;
  },
};

export default AuthAPI;
