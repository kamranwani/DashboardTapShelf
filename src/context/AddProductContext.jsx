import React, { createContext, useState } from "react";

export const AddProductContext = createContext();

export const AddProductProvider = ({ children }) => {
  const ProductsData = [
    {
      itemName: "Maggi",
      buyingPrice: "$2",
      quanity: "43",
      thresholdValue: "12 packets",
      expiryDate: "11/12/22",
      avaliblity: "true",
      id: 1,
    },
    {
      itemName: "Maggi2",
      buyingPrice: "$4",
      quanity: "56",
      thresholdValue: "14 packets",
      expiryDate: "22/02/22",
      avaliblity: "false",
      id: 2,
    },
    {
      itemName: "Yippy",
      buyingPrice: "$1",
      quanity: "63",
      thresholdValue: "18 packets",
      expiryDate: "24/11/22",
      avaliblity: "false",
      id: 3,
    },
    {
      itemName: "Yippy",
      buyingPrice: "$7",
      quanity: "123",
      thresholdValue: "26 packets",
      expiryDate: "24/12/24",
      avaliblity: "false",
      id: 4,
    },
  ];
  const [isAddProduct, setIsAddProduct] = useState(false);

  return (
    <AddProductContext.Provider
      value={{
        ProductsData,
        isAddProduct,
        setIsAddProduct,
      }}
    >
      {children}
    </AddProductContext.Provider>
  );
};
