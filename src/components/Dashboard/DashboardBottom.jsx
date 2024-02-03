import { IoFilterSharp } from "react-icons/io5";
import PaginatedTable from "./PaginatedTable";
import { DashboardProductColumns } from "../../Utils/data/DashboardData";
import { AddProductContext } from "../../context/AddProductContext";
import { useContext } from "react";
import AddProductModal from "../Modal/AddProductModal";

function DashboardBottom() {
  const { ProductsData, isAddProduct, setIsAddProduct } =
    useContext(AddProductContext);
  return (
    <div>
      <header className="block md:flex justify-between items-start mb-6 p-4">
        <h2 className="text-lg font-medium mb-2 md:mb-0">Products</h2>
        <div className="block md:flex gap-4 items-center">
          <button
            className="bg-blue-600 text-white py-2 px-4 rounded-sm text-sm mb-2 md:mb-0"
            onClick={() => setIsAddProduct(true)}
          >
            Add Product
          </button>
          <button className="flex gap-1 items-center bg-inherit border text-slate-600 py-2 px-4 rounded-sm text-sm mb-2 md:mb-0">
            <IoFilterSharp />
            <span> Filters</span>
          </button>
          <button className="bg-inherit border text-slate-600 py-2 px-4 rounded-sm text-sm mb-2 md:mb-0">
            Download all
          </button>
        </div>
      </header>
      <main>
        <PaginatedTable columns={DashboardProductColumns} data={ProductsData} />
      </main>
      {isAddProduct && <AddProductModal />}
    </div>
  );
}

export default DashboardBottom;
