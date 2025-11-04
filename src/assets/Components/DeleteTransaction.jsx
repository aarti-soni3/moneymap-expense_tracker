// #region Imports
import {
  Dialog,
  Button,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";

import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { deleteTransaction } from "../Store/TransactionSlice";

// #endregion

function DeleteTransaction({ open, selectedTransaction, resetDeleteDialog }) {
  // #region Hooks
  const [transactionData, setTransactionData] = useState({ id: "", amount: 0 });
  const dispatch = useDispatch();

  useEffect(() => {
    if (selectedTransaction)
      setTransactionData({
        id: selectedTransaction.id,
        amount: selectedTransaction.amount,
      });
  }, [selectedTransaction]);
  // #endregion

  // #region Event Handlers
  const handleOnDelete = () => {
    console.log(transactionData.id);
    dispatch(deleteTransaction(transactionData.id));
    resetDeleteDialog();
  };
  // #endregion

  // #region Render
  if (!selectedTransaction) return null;

  return (
    <>
      <Dialog open={open} onClose={resetDeleteDialog}>
        <DialogTitle>Delete Transaction</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Delete transaction ?
            <br />${transactionData.amount} transaction will be permanently
            removed.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={resetDeleteDialog}>Cancel</Button>
          <Button onClick={handleOnDelete} autoFocus>
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
  // #endregion
}

export default DeleteTransaction;
