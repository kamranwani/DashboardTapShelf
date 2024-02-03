import "./AddProductModal.css";
import AddProductModalForm from "./AddProductModalForm";

function AddProductModal() {
  return (
    <div className="fixed inset-0 z-50 overflow-auto bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-2 rounded shadow-md">
        <h2 className="text-lg mb-6">New Product</h2>
        <AddProductModalForm />
      </div>
    </div>
  );
}

export default AddProductModal;
