import React from "react";

function DashboardTop() {
  return (
    <div>
      <h2 className="mb-3 text-lg">Overall Inventory</h2>
      <div className="grid grid-cols-4 gap-6">
        <div className="border-r">
          <h3 className="text-blue-600 text-sm mb-2">Categories</h3>
          <p className="text-slate-900 text-sm mb-1">14</p>
          <p className="text-slate-500 text-xs">Last 7 days</p>
        </div>

        <div className="border-r">
          <h3 className="text-orange-600 text-sm mb-2">Total Products</h3>
          <div className="flex items-center gap-2">
            <div className="flex-1">
              <p className="text-slate-900 text-sm mb-1">868</p>
              <p className="text-slate-500 text-xs">Last 7 days</p>
            </div>
            <div className="flex-1">
              <p className="text-slate-900 text-sm mb-1">$2300</p>
              <p className="text-slate-500 text-xs">Revenue</p>
            </div>
          </div>
        </div>

        <div className="border-r">
          <h3 className="text-purple-600 text-sm mb-2">Top Selling</h3>
          <div className="flex items-center gap-2">
            <div className="flex-1">
              <p className="text-slate-900 text-sm mb-1">5</p>
              <p className="text-slate-500 text-xs">Last 7 days</p>
            </div>
            <div className="flex-1">
              <p className="text-slate-900 text-sm mb-1">$210</p>
              <p className="text-slate-500 text-xs">Cost</p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-red-600 text-sm mb-2">Low Stocks</h3>
          <div className="flex items-center gap-2">
            <div className="flex-1">
              <p className="text-slate-900 text-sm mb-1">12</p>
              <p className="text-slate-500 text-xs">Ordered</p>
            </div>
            <div className="flex-1">
              <p className="text-slate-900 text-sm mb-1">2</p>
              <p className="text-slate-500 text-xs">Not In Stock</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardTop;
