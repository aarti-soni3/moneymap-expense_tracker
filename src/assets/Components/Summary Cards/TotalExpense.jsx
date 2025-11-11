import styled from "@emotion/styled";
import { alpha, Paper, Stack, Typography } from "@mui/material";
import { useCallback } from "react";
import { useSelector } from "react-redux";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";
import { GetIdFromTransationType } from "../../Utils/transactionHelpers";

function TotalExpense() {
  //total - 7,659.73
  // total expense - 859.73

  const transactions = useSelector((state) => state.transaction.items);
  const transactionTypes = useSelector(
    (state) => state.setting.transactionType
  );

  const totalAmount = useCallback(
    (typeId) => {
      const filteredTansactions = transactions.filter((transaction) => {
        return transaction.typeId === typeId;
      });

      return filteredTansactions.reduce((accumulator, currentTransaction) => {
        return (accumulator += currentTransaction.amount);
      }, 0);
    },
    [transactions]
  );

  const totalExpense = totalAmount(
    GetIdFromTransationType(transactionTypes, "Expense")
  );

  const IncomeCard = styled(Paper)(({ theme }) => ({
    width: "220px",
    height: "100px",
    padding: theme.spacing(2),
    backgroundImage: theme.palette.custom.gradients.expense,
  }));

  return (
    <>
      <IncomeCard
        elevation={4}
        square={false}
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          flexGrow: "1",
        }}
      >
        <Stack sx={{ display: "flex", flexDirection: "column" }}>
          <Typography
            variant="caption"
            fontSize={14}
            fontWeight={600}
            sx={(theme) => ({
              color: alpha(theme.palette.error.contrastText, 0.85),
            })}
          >
            Total Expense
          </Typography>
          <Typography
            variant="h1"
            sx={{ mt: "10px", color: "error.contrastText" }}
          >
            {" "}
            &#8377;{totalExpense}
          </Typography>
          <Typography
            variant="caption"
            sx={(theme) => ({
              color: alpha(theme.palette.error.contrastText, 0.85),
            })}
          >
            changes from last month
          </Typography>
        </Stack>
        <TrendingDownIcon
          sx={(theme) => ({
            color: alpha(theme.palette.error.contrastText, 0.85),
            mr: "5px",
          })}
        />
      </IncomeCard>
    </>
  );
}

export default TotalExpense;
