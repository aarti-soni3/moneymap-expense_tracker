import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { useSelector } from "react-redux";
import { useContext, useState } from "react";
import UpdateTransaction from "./UpdateTransaction";
import DeleteTransaction from "./DeleteTransaction";
import TransactionRecord from "./TransactionRecord";
import { FilterDataContext } from "../../Providers/FilterContext";

export default function TransactionView() {
  const transactions = useSelector((state) => state.transaction.items);

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [showUpdateDialog, setShowUpdateDialog] = useState(false);
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const [selectedTransaction, setSelectedTransaction] = useState(null);

  const { searchFilterData, categoryFilterData } =
    useContext(FilterDataContext);

  const filterBySearchData = () => {
    return transactions.filter((transaction) => {
      if (searchFilterData === "") return transaction;

      if (searchFilterData) {
        return (
          transaction.title
            .toLowerCase()
            .includes(searchFilterData.toLowerCase()) ||
          transaction.description
            .toLowerCase()
            .includes(searchFilterData.toLowerCase())
        );
      } else return null;
    });
  };

  const finalFilteredData = () => {
    if (categoryFilterData.length === 0) return filterBySearchData();
    return filterBySearchData().filter((transaction) =>
      categoryFilterData.some((id) => transaction.categoryId === id)
    );
  };

  const transactionTitle = [
    "Date",
    "Type",
    "Amount",
    "Title",
    "Category",
    "Description",
    "Actions",
  ];

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleOnUpdate = (transaction) => {
    setSelectedTransaction(transaction);
    setShowUpdateDialog(true);
  };

  const resetUpdateDialog = () => {
    setShowUpdateDialog(false);
    setSelectedTransaction(null);
  };

  const handleOnDelete = (transaction) => {
    setSelectedTransaction(transaction);
    setShowDeleteDialog(true);
  };

  const resetDeleteDialog = () => {
    setShowDeleteDialog(false);
    setSelectedTransaction(null);
  };

  return (
    <>
      <Paper sx={{ overflow: "hidden" }}>
        <TableContainer
          sx={{
            maxHeight: "460px",
          }}
        >
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {transactionTitle.map((title) => (
                  <TableCell
                    key={title}
                    align="left"
                    sx={{
                      // backgroundColor: "#dedede",
                      // backgroundColor: "#F3F4F6",
                      backgroundColor: "#eaebecff",
                      color: "black",
                      fontWeight: 600,
                      textTransform: "uppercase",
                    }}
                  >
                    {title}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>

            <TableBody>
              {finalFilteredData()
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((transaction) => {
                  return (
                    <TransactionRecord
                      key={transaction.id}
                      transaction={transaction}
                      handleOnUpdate={handleOnUpdate}
                      handleOnDelete={handleOnDelete}
                    />
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={finalFilteredData().length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>

      <UpdateTransaction
        open={showUpdateDialog}
        selectedTransaction={selectedTransaction}
        resetUpdateDialog={resetUpdateDialog}
      />

      <DeleteTransaction
        open={showDeleteDialog}
        selectedTransaction={selectedTransaction}
        resetDeleteDialog={resetDeleteDialog}
      />
    </>
  );
}
