import http from "./http";
import { getUserInfo } from "./userInf";

const userInfo = getUserInfo();

export const getOwnerTips = () => {
  return http.get(`tip/mytips/${userInfo.data.user_id}`);
};
