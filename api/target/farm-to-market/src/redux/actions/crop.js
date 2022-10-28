import { toast } from "react-toastify";
import http from "../../services/http";

export const addCrop = (data) => {
  return async function () {
    await http.post("/crop/addCrop", data).then((res) => {
      if (res.data && res.data.status === 1) {
        toast.success(res.data.message);
      } else if (res.data && res.data.status === 0) {
        toast.error(res.data.message);
      }
    });
  };
};
