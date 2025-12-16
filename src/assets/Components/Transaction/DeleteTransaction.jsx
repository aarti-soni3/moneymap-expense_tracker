// #region Imports
import {
  Dialog,
  Button,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Stack,
  Avatar,
  Typography,
  Box,
} from "@mui/material";

import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { deleteTransaction } from "../../Store/TransactionSlice";
import DisplayMUIIcon from "../UI/DisplayMUIIcon";

// #endregion

function DeleteTransaction({ open, selectedTransaction, resetDeleteDialog }) {
  // #region Hooks
  const [transactionData, setTransactionData] = useState({
    id: "",
    title: "",
    amount: 0,
  });
  const dispatch = useDispatch();

  useEffect(() => {
    if (selectedTransaction)
      setTransactionData({
        id: selectedTransaction.id,
        title: selectedTransaction.title,
        amount: selectedTransaction.amount,
      });
  }, [selectedTransaction]);
  // #endregion

  // #region Event Handlers
  const handleOnDelete = () => {
    dispatch(deleteTransaction(transactionData.id));
    resetDeleteDialog();
  };
  // #endregion

  // #region Render
  if (!selectedTransaction) return null;

  return (
    <>
      <Dialog open={open} onClose={resetDeleteDialog}>
        {/* <DialogTitle>Delete Transaction</DialogTitle> */}
        <DialogContent>
          <DialogContentText>
            <Stack direction={"column"} alignItems={"center"} gap={1}>
              <Avatar sx={{ backgroundColor: "pink" }}>
                <DisplayMUIIcon
                  iconName={"Delete Outlined"}
                  color={"error.dark"}
                />
              </Avatar>
              <Typography variant="h3">Delete transaction?</Typography>
              <Box display={"flex"} flexDirection={"row"} gap={1}>
                <Typography variant="subtitle2" fontWeight={600} align="center">
                  {transactionData.title}
                </Typography>
                <Typography variant="subtitle2" align="center">
                  transaction will be permanently removed.
                </Typography>
              </Box>
            </Stack>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button variant="outlined" color="error" onClick={resetDeleteDialog}>Cancel</Button>
          <Button variant="contained" color="error" onClick={handleOnDelete} autoFocus>
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
  // #endregion
}

export default DeleteTransaction;
