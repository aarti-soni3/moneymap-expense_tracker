import { Stack } from "@mui/material";
import TotalIncome from "./TotalIncome";
import TotalExpense from "./TotalExpense";
import TotalBalance from "./TotalBalance";

function TransactionSummary() {
  return (
    <>
      <Stack
        spacing={4}
        direction={{xs:'column',sm:'row'}}
        justifyContent={"center"}
        alignItems={'center'}
        sx={{ display: "flex" }}
      >
        <TotalIncome />
        <TotalExpense />
        <TotalBalance />
      </Stack>
    </>
  );
}

export default TransactionSummary;
