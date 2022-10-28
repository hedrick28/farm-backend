import { toast } from "react-toastify";
import http from "../../services/http";

export const addCrop = (data) => {
  console.log(data);
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

// export const getCropById = (id) => {
//   return async function () {
//     await http.get(`/crop/getCrop/${id}`).then((res) => {
//       if (res.data && res.data.status === 1) {
//         toast.success(res.data.message);
//       } else if (res.data && res.data.status === 0) {
//         toast.error(res.data.message);
//       }
//     });
//   };
// };

// export const editCrop = (id, crop) => {
//   console.log(crop);
//   return async function () {
//     await http.put(`/crop/editCrop/${id}`, crop).then((res) => {
//       if (res.data && res.data.status === 1) {
//         toast.success(res.data.message);
//       } else if (res.data && res.data.status === 0) {
//         toast.error(res.data.message);
//       }
//     });
//   };
// };
