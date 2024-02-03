import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/shared/Layout";
import Dashboard from "./components/Dashboard/Dashboard";

import Inventory from "./components/Inventory/Inventory";
import Reports from "./components/Reports/Reports";
import Suppliers from "./components/Suppliers/Suppliers";
import Orders from "./components/orders/Orders";
import ManageStore from "./components/ManageStore/ManageStore";
import Setting from "./components/Settings/Setting";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="/inventory" element={<Inventory />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/suppliers" element={<Suppliers />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/managestore" element={<ManageStore />} />
          <Route path="/settings" element={<Setting />} />
          <Route path="*" element={<div>Page Not Found</div>} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
