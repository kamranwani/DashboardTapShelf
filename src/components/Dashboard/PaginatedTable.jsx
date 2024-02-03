import React, { useMemo } from "react";
import { useTable, usePagination } from "react-table";

const PaginatedTable = ({ columns, data }) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    state: { pageIndex, pageSize },
    previousPage,
    nextPage,
    canPreviousPage,
    canNextPage,
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0, pageSize: 2 },
    },
    usePagination
  );

  const memoizedColumns = useMemo(() => columns, [columns]);

  return (
    <div className="border">
      <table {...getTableProps()} className="table w-full mb-4">
        <thead className="border-b border-slate-200">
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th
                  {...column.getHeaderProps()}
                  className="font-medium text-slate-800 py-2"
                >
                  {column.render("Header")}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()} className="text-center">
          {page.map((row) => {
            prepareRow(row);
            return (
              <tr
                {...row.getRowProps()}
                className="border-b border-slate-200 text-sm mb-1"
              >
                {row.cells.map((cell, index) => (
                  <td
                    {...cell.getCellProps()}
                    className={`py-2 ${
                      cell.column.id === "avaliblity" &&
                      cell.value !== undefined // Add this check
                        ? cell.value.toLowerCase() === "true"
                          ? "text-green-500"
                          : "text-red-500"
                        : ""
                    }`}
                  >
                    {cell.column.id === "avaliblity" &&
                    cell.value !== undefined // Add this check
                      ? cell.value.toLowerCase() === "true"
                        ? "In Stock"
                        : "Not in Stock"
                      : cell.render("Cell")}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="grid grid-cols-3 px-10 py-1 items-center">
        <button
          onClick={() => previousPage()}
          disabled={!canPreviousPage}
          className="bg-inherit border border-slate-300 text-slate-600 py-2 px-4 rounded-sm text-sm w-1/4 justify-self-start"
        >
          Previous
        </button>
        <span className="text-center">
          Page {pageIndex + 1} of {Math.ceil(data.length / pageSize)}
        </span>
        <button
          onClick={() => nextPage()}
          disabled={!canNextPage}
          className="bg-inherit border border-slate-300 text-slate-600 py-2 px-4 rounded-sm text-sm w-1/4 justify-self-end"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default PaginatedTable;
