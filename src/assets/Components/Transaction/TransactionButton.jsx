import { Button, Typography } from "@mui/material";
import { useState } from "react";
import AddTransaction from "./AddTransaction";
import AddIcon from "@mui/icons-material/Add";

function TransactionButton() {
  const [showTransactionDialog, setShowTransactionDialog] = useState(false);

  const handleOnCloseDialog = () => {
    setShowTransactionDialog(false);
  };

  return (
    <>
      <Button
        variant="contained"
        onClick={() => {
          setShowTransactionDialog(true);
        }}
      >
        <AddIcon /> Add Transaction
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
