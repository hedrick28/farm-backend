import http from "./http";
import { getUserInfo } from "./userInf";
const userInfo = getUserInfo();

export const myProducts = () => {
  return http.get(`/product/myproduct/${userInfo.data.user_id}`);
};

export const productDetails = (id) => {
  return http.get(`/product/product/${id}`);
};

export const productDelete = (id) => {
  return http.delete(`/product/delete/${id}`);
};
