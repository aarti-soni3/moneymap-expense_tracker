import { Button } from "@mui/material";
import { useState } from "react";
import AddTransaction from "./AddTransaction";

function TransactionButton() {
  const [showAddDialog, setShowAddDialog] = useState(false);

  const handleOnCloseDialog = () => {
    setShowAddDialog(false);
  };

  return (
    <>
      <Button
      variant="outlined"
        onClick={() => {
          setShowAddDialog(true);
        }}
      >
        Add Income / Expense
      </Button> <br/><br/>
      <AddTransaction
        open={showAddDialog}
        handleOnCloseDialog={handleOnCloseDialog}
      />
    </>
  );
}

export default TransactionButton;
