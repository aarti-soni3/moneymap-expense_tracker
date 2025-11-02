import * as React from "react";
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
import { formateFromYMDToDMY } from "../Utils/date";

export default function TransactionView() {
  const transactions = useSelector((state) => state.transaction.items);
  const categories = useSelector((state) => state.category.items);

  //TODO: used
  const GetCategoryFromId = (id) => {
    if (!categories || !Array.isArray(categories)) return "";
    const category = categories.find((c) => c.id === id);
    return category ? category.name : "";
  };

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <>
      <Paper sx={{ width: "100%", overflow: "hidden" }}>
        <TableContainer sx={{ maxHeight: 440 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {["Date", "Type", "Amount", "Description", "Category"].map(
                  (title) => (
                    <TableCell key={title} align="right">
                      {title}
                    </TableCell>
                  )
                )}
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
                      <TableCell align="right">
                        {formateFromYMDToDMY(transaction.date)}
                      </TableCell>
                      <TableCell align="right">{transaction.type}</TableCell>
                      <TableCell align="right">{transaction.amount}</TableCell>
                      <TableCell align="right">
                        {transaction.description}
                      </TableCell>
                      <TableCell align="right">
                        {GetCategoryFromId(transaction.categoryId)}
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
    </>
  );
}
