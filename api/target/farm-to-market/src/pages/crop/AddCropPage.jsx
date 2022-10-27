import React, { useContext } from "react";
import AddEditCropForm from "../../components/addEditCrop/AddEditCropForm";
import { CropContext } from "../../contexts/CropContext";

const AddCropPage = () => {
  const { onAddCrop } = useContext(CropContext);
  return <AddEditCropForm onSubmit={onAddCrop} />;
};

export default AddCropPage;
