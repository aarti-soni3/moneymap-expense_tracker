import { Button } from "@mui/material";
import { useState } from "react";
import TransactionDialog from "./TransactionDialog";

function TransactionButton() {
  const [open, setOpen] = useState(false);

  const handleOnClose = () => {
    setOpen(false);
  };

  const handleOnSave = () => {
    setOpen(false);
  };

  return (
    <>
      <Button
      variant="outlined"
        onClick={() => {
          setOpen(true);
        }}
      >
        Add Income / Expense
      </Button> <br/><br/>
      <TransactionDialog
        open={open}
        handleOnClose={handleOnClose}
        handleOnSave={handleOnSave}
      />
    </>
  );
}

export default TransactionButton;
