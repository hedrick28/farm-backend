import http from "./http";
import { getUserInfo } from "./userInf";
const userInfo = getUserInfo();

export const myProducts = () => {
  return http.get(`/product/myproduct/${userInfo.data.user_id}`);
};
