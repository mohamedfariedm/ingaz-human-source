import axiosInstance from "./axiosInstance";

const ProfileAPI = {
  getProfile: async () => {
    const response = await axiosInstance.get("/profile");
    return response.data;
  },
  updateProfile: async (firstName, lastName, image) => {
    const formData = new FormData();
    formData.append("first_name", firstName);
    formData.append("last_name", lastName);
    if (image) {
      formData.append("image", image);
    }
    const response = await axiosInstance.post("/update-profile", formData);
    return response.data;
  },
};

export default ProfileAPI;
