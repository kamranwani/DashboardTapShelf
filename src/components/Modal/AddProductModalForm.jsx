import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function AddProductModalForm() {
  const [productName, setProductName] = useState("");
  const [productID, setProductID] = useState("");
  const [category, setCategory] = useState("");
  const [buyingPrice, setBuyingPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [unit, setUnit] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [threshold, setThreshold] = useState("");

  const handleInputChange = (e, setterFunction) => {
    const inputValue = e.target.value;
    setterFunction(inputValue);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    
    if (!productName || !productID || !category || !buyingPrice || !quantity || !unit || !expiryDate || !threshold) {
      toast.error("Please fill in all fields");
      return;
    }

    
    console.log("Product Name:", productName);
    console.log("Product ID:", productID);
    console.log("Category:", category);
    console.log("Buying Price:", buyingPrice);
    console.log("Quantity:", quantity);
    console.log("Unit:", unit);
    console.log("Expiry Date:", expiryDate);
    console.log("Threshold:", threshold);

    
    setProductName("");
    setProductID("");
    setCategory("");
    setBuyingPrice("");
    setQuantity("");
    setUnit("");
    setExpiryDate("");
    setThreshold("");

    
  };

  return (
    <>
      <ToastContainer />
      <form onSubmit={handleFormSubmit} className="mb-6 px-6">
        <div className="flex items-center justify-center gap-3 mb-2">
          <input
            type="file"
            id="fileInput"
            name="fileInput"
            accept="image/png, image/gif, image/jpeg"
            className="border border-dashed w-1/3 py-4 px-2 align-center text-xs"
          />
          <div className="text-center">
            <p className="text-xs  mb-1">Drag Image Here</p>
            <p className="text-xs m-0  ">Or</p>
            <label htmlFor="fileInput" className="text-xs text-blue-600 m-0 p-0 ">
              Browse Image
            </label>
          </div>
        </div>

        <div className="flex justify-between items-center gap-2 mb-2">
          <label htmlFor="ProductName" className="flex-2 text-sm">
            Product Name
          </label>
          <input
            required
            type="text"
            id="ProductName"
            value={productName}
            onChange={(e) => handleInputChange(e, setProductName)}
            className="w-4/6 rounded text-sm font-light border py-1 px-2 focus:outline-none bg-inherit"
            placeholder="Enter product name"
          />
        </div>

        <div className="flex justify-between gap-2 items-center mb-2">
          <label htmlFor="ProductID" className="flex-2 text-sm">
            Product ID
          </label>
          <input
            required
            type="number"
            id="ProductID"
            value={productID}
            onChange={(e) => handleInputChange(e, setProductID)}
            className="w-4/6 rounded text-sm font-light border py-1 px-2 focus:outline-none bg-inherit"
            placeholder="Enter product ID"
          />
        </div>

        <div className="flex justify-between gap-2 items-center mb-2">
          <label htmlFor="Category" className="flex-2 text-sm">
            Category
          </label>
          <input
            required
            type="text"
            id="Category"
            value={category}
            onChange={(e) => handleInputChange(e, setCategory)}
            className="w-4/6 rounded text-sm font-light border py-1 px-2 focus:outline-none bg-inherit"
            placeholder="Enter product category"
          />
        </div>

        <div className="flex justify-between gap-2 items-center mb-2">
          <label htmlFor="BuyingPrice" className="flex-2 text-sm">
            Buying Price
          </label>
          <input
            type="number"
            name="numericInput"
            pattern="[0-9]*"
            inputmode="numeric"
            required
            id="BuyingPrice"
            value={buyingPrice}
            onChange={(e) => handleInputChange(e, setBuyingPrice)}
            className="w-4/6 rounded text-sm font-light border py-1 px-2 focus:outline-none bg-inherit"
            placeholder="Enter buying price"
          />
        </div>

        <div className="flex justify-between gap-2 items-center mb-2">
          <label htmlFor="Quantity" className="flex-2 text-sm">
            Quantity
          </label>
          <input
            type="number"
            name="numericInput"
            pattern="[0-9]*"
            inputmode="numeric"
            required
            id="Quantity"
            value={quantity}
            onChange={(e) => handleInputChange(e, setQuantity)}
            className="w-4/6 rounded text-sm font-light border py-1 px-2 focus:outline-none bg-inherit"
            placeholder="Enter quantity"
          />
        </div>

        <div className="flex justify-between gap-2 items-center mb-2">
          <label htmlFor="Unit" className="flex-2 text-sm">
            Unit
          </label>
          <input
            type="number"
            name="numericInput"
            pattern="[0-9]*"
            inputmode="numeric"
            required
            id="Unit"
            value={unit}
            onChange={(e) => handleInputChange(e, setUnit)}
            className="w-4/6 rounded text-sm font-light border py-1 px-2 focus:outline-none bg-inherit"
            placeholder="Enter unit"
          />
        </div>

        <div className="flex justify-between gap-2 items-center mb-2">
          <label htmlFor="expirydate" className="flex-2 text-sm">
            Expiry Date
          </label>
          <input
            type="date"
            name="expirydate"
            required
            id="expirydate"
            value={expiryDate}
            onChange={(e) => handleInputChange(e, setExpiryDate)}
            className="w-4/6 rounded text-sm text-slate-400 font-light border py-1 px-2 focus:outline-none bg-inherit"
            placeholder="Enter expiry date"
          />
        </div>

        <div className="flex justify-between gap-2 items-center mb-2">
          <label htmlFor="Threshold" className="flex-2 text-sm">
            Threshold
          </label>
          <input
            type="number"
            name="numericInput"
            pattern="[0-9]*"
            inputmode="numeric"
            required
            id="Threshold"
            value={threshold}
            onChange={(e) => handleInputChange(e, setThreshold)}
            className="w-4/6 rounded text-sm font-light border py-1 px-2 focus:outline-none bg-inherit"
            placeholder="Enter threshold"
          />
        </div>

        <div className="flex gap-4 justify-end items-center">
          <button
            onClick={() => setIsAddProduct(false)}
            className="bg-slate-100 border text-slate-500 p-2 rounded text-xs"
          >
            Discard
          </button>
          <button type="submit" onClick={handleFormSubmit} className="bg-blue-600 text-white p-3 rounded text-sm ">
            Add Product
          </button>
        </div>
      </form>
    </>
  );
}

export default AddProductModalForm;
