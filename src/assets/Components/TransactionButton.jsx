import { Button } from "@mui/material";
import { useState } from "react";
import AddTransaction from "./AddTransaction";

function TransactionButton() {
  const [showTransactionDialog, setShowTransactionDialog] = useState(false);

  const handleOnCloseDialog = () => {
    setShowTransactionDialog(false);
  };

  return (
    <>
      <Button
        variant="outlined"
        onClick={() => {
          setShowTransactionDialog(true);
        }}
      >
        Add Income / Expense
      </Button>
      <br />
      <br />
      <AddTransaction
        open={showTransactionDialog}
        handleOnCloseDialog={handleOnCloseDialog}
      />
    </>
  );
}

export default TransactionButton;
