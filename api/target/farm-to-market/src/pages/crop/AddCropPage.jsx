import React from "react";
import AddEditCropForm from "../../components/addEditCrop/AddEditCropForm";
import { useDispatch } from "react-redux";
import { addCrop } from "../../redux/actions/crop";

const AddCropPage = () => {
  const dispatch = useDispatch();

  const handleSubmit = (form) => {
    dispatch(addCrop(form));
  };

  return <AddEditCropForm onSubmit={handleSubmit} />;
};

export default AddCropPage;
