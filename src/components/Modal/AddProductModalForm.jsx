import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AddProductContext } from "../../context/AddProductContext";
import { useContext } from "react";

function AddProductModalForm() {
  const { ProductsData, isAddProduct, setIsAddProduct, setProductsData } =
    useContext(AddProductContext);

  const [productName, setProductName] = useState("");
  const [productID, setProductID] = useState("");
  const [category, setCategory] = useState("");
  const [buyingPrice, setBuyingPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [unit, setUnit] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [threshold, setThreshold] = useState("");
  const [availability, setAvailability] = useState("true");

  const handleInputChange = (e, setterFunction) => {
    const inputValue = e.target.value;
    setterFunction(inputValue);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (
      !productName ||
      !productID ||
      !category ||
      !buyingPrice ||
      !quantity ||
      !unit ||
      !expiryDate ||
      !threshold
    ) {
      toast.error("Please fill in all fields");
      return;
    }

    // Get current date and time
    const current_datetime = new Date();

    // Format the datetime as a string
    const formatted_datetime = current_datetime.toISOString();

    // Create a unique ID using the formatted datetime
    const unique_id = formatted_datetime.replace(/\D/g, "");

    const newProductObj = {
      itemName: productName,
      buyingPrice: buyingPrice,
      quantity: quantity,
      thresholdValue: threshold,
      expiryDate: expiryDate,
      avaliblity: availability,
      id: unique_id,
    };
    console.log(newProductObj);
    // Update the state correctly
    setProductsData([...ProductsData, newProductObj]);

    // Reset form fields
    setProductName("");
    setProductID("");
    setCategory("");
    setBuyingPrice("");
    setQuantity("");
    setUnit("");
    setExpiryDate("");
    setThreshold("");

    setIsAddProduct(false);
  };

  return (
    <>
      <ToastContainer />
      <form onSubmit={handleFormSubmit} className="mb-6 px-6 ">
        <div className="block md:flex items-center justify-center gap-3 mb-2">
          <input
            type="file"
            id="fileInput"
            name="fileInput"
            accept="image/png, image/gif, image/jpeg"
            className="border border-dashed w-1/3 py-4 px-2 align-center text-xs mb-2 md:mb-0"
          />
          <div className="text-start md:text-center">
            <p className="text-xs  mb-1">Drag Image Here</p>
            <p className="text-xs m-0  ">Or</p>
            <label
              htmlFor="fileInput"
              className="text-xs text-blue-600 m-0 p-0 "
            >
              Browse Image
            </label>
          </div>
        </div>

        <div className="block md:flex justify-between items-center gap-2 mb-2 border-b md:border-none pb-2 md:p-0">
          <label
            htmlFor="ProductName"
            className="flex-2 text-sm mb-2 md:mb-0 block"
          >
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

        <div className="block md:flex justify-between items-center gap-2 mb-2 border-b md:border-none pb-2 md:p-0">
          <label
            htmlFor="ProductID"
            className="flex-2 text-sm mb-2 md:mb-0 block"
          >
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

        <div className="block md:flex justify-between items-center gap-2 mb-2 border-b md:border-none pb-2 md:p-0">
          <label
            htmlFor="Category"
            className="flex-2 text-sm mb-2 md:mb-0 block"
          >
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

        <div className="block md:flex justify-between items-center gap-2 mb-2 border-b md:border-none pb-2 md:p-0">
          <label
            htmlFor="BuyingPrice"
            className="flex-2 text-sm mb-2 md:mb-0 block"
          >
            Buying Price
          </label>
          <input
            type="number"
            name="numericInput"
            pattern="[0-9]*"
            required
            id="BuyingPrice"
            value={buyingPrice}
            onChange={(e) => handleInputChange(e, setBuyingPrice)}
            className="w-4/6 rounded text-sm font-light border py-1 px-2 focus:outline-none bg-inherit"
            placeholder="Enter buying price"
          />
        </div>

        <div className="block md:flex justify-between items-center gap-2 mb-2 border-b md:border-none pb-2 md:p-0">
          <label
            htmlFor="Quantity"
            className="flex-2 text-sm mb-2 md:mb-0 block"
          >
            Quantity
          </label>
          <input
            type="number"
            name="numericInput"
            pattern="[0-9]*"
            inputMode="numeric"
            required
            id="Quantity"
            value={quantity}
            onChange={(e) => handleInputChange(e, setQuantity)}
            className="w-4/6 rounded text-sm font-light border py-1 px-2 focus:outline-none bg-inherit"
            placeholder="Enter quantity"
          />
        </div>

        <div className="block md:flex justify-between items-center gap-2 mb-2 border-b md:border-none pb-2 md:p-0">
          <label htmlFor="Unit" className="flex-2 text-sm mb-2 md:mb-0 block">
            Unit
          </label>
          <input
            type="number"
            name="numericInput"
            pattern="[0-9]*"
            inputMode="numeric"
            required
            id="Unit"
            value={unit}
            onChange={(e) => handleInputChange(e, setUnit)}
            className="w-4/6 rounded text-sm font-light border py-1 px-2 focus:outline-none bg-inherit"
            placeholder="Enter unit"
          />
        </div>

        <div className="block md:flex justify-between items-center gap-2 mb-2 border-b md:border-none pb-2 md:p-0">
          <label
            htmlFor="expirydate"
            className="flex-2 text-sm mb-2 md:mb-0 block"
          >
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

        <div className="block md:flex justify-between items-center gap-2 mb-2 border-b md:border-none pb-2 md:p-0">
          <label
            htmlFor="Threshold"
            className="flex-2 text-sm mb-2 md:mb-0 block"
          >
            Threshold
          </label>
          <input
            type="number"
            name="numericInput"
            pattern="[0-9]*"
            inputMode="numeric"
            required
            id="Threshold"
            value={threshold}
            onChange={(e) => handleInputChange(e, setThreshold)}
            className="w-4/6 rounded text-sm font-light border py-1 px-2 focus:outline-none bg-inherit"
            placeholder="Enter threshold"
          />
        </div>

        <div className="block md:flex justify-between items-center gap-2 mb-2 border-b md:mb-6 md:border-none pb-2 md:p-0">
          <label
            htmlFor="Availability"
            className="flex-2 text-sm mb-2 md:mb-0 block"
          >
            Availability
          </label>

          <div className="flex items-center gap-1">
            <input
              type="radio"
              name="availability"
              value="true"
              checked={availability === "true"}
              onChange={() => setAvailability("true")}
              className=""
            />
            <label className="text-sm text-green-500">In Stock</label>
          </div>
          <div className="flex items-center gap-1">
            <input
              type="radio"
              name="availability"
              value="false"
              checked={availability === "false"}
              onChange={() => setAvailability("false")}
              className=""
            />
            <label className="text-sm text-red-500">Out of Stock</label>
          </div>
        </div>

        <div className="flex gap-4 justify-end items-center">
          <button
            onClick={() => setIsAddProduct(false)}
            className="bg-slate-100 border text-slate-500 p-2 rounded text-xs"
          >
            Discard
          </button>
          <button
            type="submit"
            onClick={handleFormSubmit}
            className="bg-blue-600 text-white p-3 rounded text-sm "
          >
            Add Product
          </button>
        </div>
      </form>
    </>
  );
}

export default AddProductModalForm;
