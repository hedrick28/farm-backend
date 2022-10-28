import React from "react";
import { useNavigate } from "react-router-dom";

const CropPage = () => {
  const navigate = useNavigate();

  return (
    <div>
      <button onClick={() => navigate("/addCrop")}>
        Magdagdag ng Produkto
      </button>
    </div>
  );
};

export default CropPage;
