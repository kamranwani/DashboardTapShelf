import { IoFilterSharp } from "react-icons/io5";
import {
  TableContainer,
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableCell,
  TableFooter,
  Pagination,
  Avatar,
  Badge,
} from "@windmill/react-ui";

const tableHeaders = [
  "Products",
  "Buying Price",
  "Quantity",
  "Threshhold Value",
  "Expiry Date",
  "Availiblity",
];
const Data = [
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
    avaliblity: "true",
    id: 4,
  },
];

function DashboardBottom() {
  return (
    <div>
      <header className="flex justify-between items-start mb-2">
        <h2 className="text-lg font-medium">Products</h2>
        <div className="flex gap-4 items-center">
          <button className="bg-blue-600 text-white py-2 px-4 rounded-sm text-sm">
            Add Product
          </button>
          <button className="flex gap-1 items-center bg-inherit border text-slate-600 py-2 px-4 rounded-sm text-sm">
            <IoFilterSharp />
            <span> Filters</span>
          </button>
          <button className="bg-inherit border text-slate-600 py-2 px-4 rounded-sm text-sm">
            Download all
          </button>
        </div>
      </header>
      <main>
        <TableContainer>
          <Table>
            <TableHeader className="border-2 border-orange-500">
              <TableRow className="border border-red-500">
                <TableCell>Craxy</TableCell>
                <TableCell>Amount</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Craxy</TableCell>
                <TableCell>Amount</TableCell>
                <TableCell>Status</TableCell>
              </TableRow>
            </TableHeader>
            <TableBody className="border-2 border-purple-300">
              <TableRow className="border-4 border-yellow-500">
                <TableCell>
                  <span className="text-sm">$ 534.87</span>
                </TableCell>
                <TableCell>
                  <span className="text-sm">$ 534.87</span>
                </TableCell>
                <TableCell>
                  <span className="text-sm">$ 534.87</span>
                </TableCell>
                <TableCell>
                  <span className="text-sm">$ 534.87</span>
                </TableCell>
                <TableCell>
                  <span className="text-sm">$ 534.87</span>
                </TableCell>
                <TableCell>
                  <Badge type="success">success</Badge>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
          <TableFooter>
            <Pagination
              totalResults={3}
              resultsPerPage={1}
              onChange={() => {}}
              label="Table navigation"
            />
          </TableFooter>
        </TableContainer>
      </main>
    </div>
  );
}

export default DashboardBottom;
