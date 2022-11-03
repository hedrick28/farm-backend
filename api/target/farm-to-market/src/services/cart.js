import http from "./http";

export const addToCart = (data) => {
  return http.post("/cart/add", data);
};
