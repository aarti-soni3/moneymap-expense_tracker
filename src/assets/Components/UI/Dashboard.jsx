import { Box, Stack } from "@mui/material";
import TransactionView from "../Transaction/TransactionView";
import TransactionSummary from "../Summary Cards/TransactionSummary";

function Dashboard() {
  return (
    <>
      <Stack
        sx={{
          display: "flex",
          flexDirection: "column",
          backgroundColor: "background.default",
          padding: "2rem",
        }}
      >
        <TransactionSummary />

        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
            mt: "50px",
          }}
        />

        <TransactionView />
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
            mt: { xs: "50px", md: "25px" },
          }}
        />
      </Stack>
    </>
  );
}

export default Dashboard;
