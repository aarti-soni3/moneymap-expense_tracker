import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { useSelector } from "react-redux";
import { useState } from "react";
import UpdateTransaction from "./UpdateTransaction";
import DeleteTransaction from "./DeleteTransaction";
import TransactionRecord from "./TransactionRecord";

export default function TransactionView() {
  const transactions = useSelector((state) => state.transaction.items);

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [showUpdateDialog, setShowUpdateDialog] = useState(false);
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const [selectedTransaction, setSelectedTransaction] = useState(null);
  // const [filters, setFilters] = useState({
  //   type: [],
  //   category: [],
  //   amountRange: [],
  // });
  const transactionTitle = [
    "Date",
    "Type",
    "Amount",
    "Title",
    "Category",
    "Description",
    "Action",
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
    console.log(selectedTransaction);
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
      <Paper sx={{ width: "90%", overflow: "hidden" }}>
        <TableContainer
          sx={{
            minHeight: "430px",
            maxHeight: "430px",
            maxWidth: "100%",
            minWidth: "100%",
          }}
        >
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {transactionTitle.map((title) => (
                  <TableCell key={title} align="left">
                    {title}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {transactions
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
          count={transactions.length}
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
