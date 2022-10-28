import { createContext, useState } from "react";

export const CropContext = createContext({
  crops: [],
  onAddCrop: () => {},
  onDeleteCrop: () => {},
  onEditCrop: () => {},
});

export const CropProvider = ({ children }) => {
  const [crops, setCrops] = useState([]);

  const handleDeleteCrop = (id) => {
    setCrops(crops.filter((crop) => crop.id !== id));
  };

  const handleAddCrop = (crop) => {
    setCrops([...crops, { ...crop, id: crops.length * 999 + 1 }]);
  };

  const handleEditCrop = (id, crop) => {
    setCrops(
      crops.map((p) => {
        if (p.id === id) {
          return {
            ...crop,
            id,
          };
        }

        return p;
      })
    );
  };

  return (
    <CropContext.Provider
      value={{
        crops,
        onAddCrop: handleAddCrop,
        onDeleteCrop: handleDeleteCrop,
        onEditCrop: handleEditCrop,
      }}
    >
      {children}
    </CropContext.Provider>
  );
};
