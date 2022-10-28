import { toast } from "react-toastify";
import http from "../../services/http";
import { varibales } from "../constants/variables";

export const addProduct = (data) => async (dispatch) => {
  await http.post("/product/add", data).then((res) => {
    if (res.data && res.data.status === 1) {
      toast.success(res.data.message);
      dispatch({
        type: varibales.ADDPRODUCT,
        payload: res.data,
      });
    } else {
      alert("An unexpected error occurred");
    }
  });
};

export const add = (image, data) => async (dispatch) => {
  if (image.entries().next().value[1] !== null) {
    await http.post("/product/upload/", image).then((res) => {
      if (res.data && res.data.status === 1) {
        dispatch(addProduct(data));
      } else {
        alert("An unexpected error occurred");
      }
    });
  }
};
