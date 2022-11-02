import http from "./http";

export const allUsers = () => {
  return http.get("/users/all");
};
