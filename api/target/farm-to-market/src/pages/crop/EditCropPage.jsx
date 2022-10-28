import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import AddEditCropForm from "../../components/addEditCrop/AddEditCropForm";
import { getCropById, editCrop } from "../../services/farmer";
// import { useDispatch } from "react-redux";

const EditCropPage = () => {
  const params = useParams();
  // const dispatch = useDispatch();
  const [crop, setCrop] = useState(null);
  useEffect(() => {
    getCropById(params.id).then((response) => {
      setCrop(response.data);
    });
  }, [params.id]);

  const handleEditCrop = (form) => {
    editCrop(crop.crop_id, form);
    // dispatch(editCrop(crop.crop_id, form));
    // navigate("/");
  };

  if (crop) {
    return (
      <AddEditCropForm
        onSubmit={handleEditCrop}
        initialValue={{
          user_id: crop.user_id,
          cropCategory: crop.cropCategory,
          cropName: crop.cropName,
          cropDescription: crop.cropDescription,
          cropPrice: crop.cropPrice,
          cropQuantityInStock: crop.cropQuantityInStock,
          cropUnit: crop.cropUnit,
          cropImage: crop.cropImage,
        }}
      />
    );
  }
  return null;
};

export default EditCropPage;
