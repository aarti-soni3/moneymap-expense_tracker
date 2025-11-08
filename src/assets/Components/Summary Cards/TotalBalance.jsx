import styled from "@emotion/styled";
import { alpha, Paper, Stack, Typography } from "@mui/material";
import { useCallback } from "react";
import { useSelector } from "react-redux";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";

function TotalBalance() {
  //total - 7,659.73
  //   total income -  5800
  // total expense - 859.73
  // net balance - 4,940.27

  const transactions = useSelector((state) => state.transaction.items);

  const totalAmount = useCallback(
    (typeId) => {
      console.log("totalAmount - bal");

      const filteredTansactions = transactions.filter((transaction) => {
        return transaction.typeId === typeId;
      });

      return filteredTansactions.reduce((accumulator, currentTransaction) => {
        return (accumulator += currentTransaction.amount);
      }, 0);
    },
    [transactions]
  );

  const totalIncome = totalAmount("type_income");
  const totalExpense = totalAmount("type_expense");
  const totalBalance = totalIncome - totalExpense;

  console.log("total balance : ", totalBalance);

  const NetBalaceCard = styled(Paper)(({ theme }) => ({
    width: "220px",
    height: "100px",
    padding: theme.spacing(2),
    backgroundImage: theme.palette.custom.gradients.balance,
  }));

  return (
    <>
      <NetBalaceCard
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
              color: alpha(theme.palette.primary.contrastText, 0.85),
            })}
          >
            Net Balance
          </Typography>
          <Typography
            variant="h1"
            sx={{ mt: "10px", color: "primary.contrastText" }}
          >
            {" "}
            &#8377;{totalBalance}
          </Typography>
          <Typography
            variant="caption"
            sx={(theme) => ({
              color: alpha(theme.palette.primary.contrastText, 0.85),
            })}
          >
            Available Balance
          </Typography>
        </Stack>
        <AccountBalanceWalletOutlinedIcon
          sx={(theme) => ({
            color: alpha(theme.palette.primary.contrastText, 0.85),
            mr: "5px",
          })}
        />
      </NetBalaceCard>
    </>
  );
}

export default TotalBalance;
