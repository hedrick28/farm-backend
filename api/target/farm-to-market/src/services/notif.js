import http from "./http";

export const getNotif = (id) => {
  return http.get(`/tip/notif/${id}`);
};

export const seenTip = (id) => {
  return http.patch(`/tip/seen/${id}`);
};
