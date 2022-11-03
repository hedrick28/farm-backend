import http from "./http";

export const allUsers = () => {
  return http.get("/users/all");
};

export const updateProfile = (data) => {
  return http.patch("/users/update/profile", data);
};

export const upload = (image) => {
  return http.post("/product/upload/", image);
};
