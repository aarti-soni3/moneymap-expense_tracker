import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { Button } from "@mui/material";
import { useSelector } from "react-redux";
import { useState } from "react";
import { formateFromYMDToDMY } from "../Utils/date";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import DeleteIcon from "@mui/icons-material/Delete";
import UpdateTransaction from "./UpdateTransaction";
import DeleteTransaction from "./DeleteTransaction";
import {
  GetCategoryFromId,
  GetTransactionTypeFromId,
} from "../Utils/transactionHelpers";

export default function TransactionView() {
  const transactions = useSelector((state) => state.transaction.items);
  const transactionType = useSelector((state) => state.setting.transactionType);
  const categories = useSelector((state) => state.category.items);

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [showUpdateDialog, setShowUpdateDialog] = useState(false);
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const [selectedTransaction, setSelectedTransaction] = useState(null);

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
      <Paper sx={{ width: "100%", overflow: "hidden" }}>
        <TableContainer sx={{ maxHeight: 440 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {[
                  "Date",
                  "Type",
                  "Amount",
                  "Description",
                  "Category",
                  "Action",
                ].map((title) => (
                  <TableCell key={title} align="right">
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
                    <TableRow
                      hover
                      role="checkbox"
                      tabIndex={-1}
                      key={transaction.id}
                    >
                      {/* TODO: used */}
                      <TableCell align="right">
                        {formateFromYMDToDMY(transaction.date)}
                      </TableCell>
                      <TableCell align="right">
                        {GetTransactionTypeFromId(
                          transactionType,
                          transaction.typeId
                        )}
                      </TableCell>
                      <TableCell align="right">${transaction.amount}</TableCell>
                      <TableCell align="right">
                        {transaction.description}
                      </TableCell>
                      <TableCell align="right">
                        {GetCategoryFromId(categories, transaction.categoryId)}
                      </TableCell>
                      <TableCell align="right">
                        <Button onClick={() => handleOnUpdate(transaction)}>
                          <ModeEditIcon />
                        </Button>
                        <Button onClick={() => handleOnDelete(transaction)}>
                          <DeleteIcon />
                        </Button>
                      </TableCell>
                    </TableRow>
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
