import React from "react";
import { useDispatch } from "react-redux";
import TipForm from "../../components/admin/TipForm";
import { addTip } from "../../redux/actions/tip";

const AddTip = () => {
  const dispatch = useDispatch();
  const handleSubmit = (data) => {
    dispatch(addTip(data));
  };
  return (
    <div className="container mb-4 mt-4">
      <TipForm onSubmit={handleSubmit} />
    </div>
  );
};

export default AddTip;
