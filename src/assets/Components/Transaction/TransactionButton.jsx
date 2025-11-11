import { Button, Typography, useMediaQuery, useTheme } from "@mui/material";
import { useState } from "react";
import AddTransaction from "./AddTransaction";
import AddIcon from "@mui/icons-material/Add";

function TransactionButton() {
  const [showTransactionDialog, setShowTransactionDialog] = useState(false);

  const handleOnCloseDialog = () => {
    setShowTransactionDialog(false);
  };

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm")); // Detects screens smaller than 'sm' breakpoint

  return (
    <>
      <Button
        variant="contained"
        onClick={() => {
          setShowTransactionDialog(true);
        }}
      >
        {isSmallScreen ? (
          <AddIcon />
        ) : (
          <>
            <AddIcon /> Add Transaction
          </>
        )}
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
