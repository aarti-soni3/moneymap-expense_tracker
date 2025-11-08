import styled from "@emotion/styled";
import { alpha, Paper, Stack, Typography } from "@mui/material";
import { useCallback } from "react";
import { useSelector } from "react-redux";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";

function TotalIncome() {
  //total - 7,659.73
  //total income -  5800

  const transactions = useSelector((state) => state.transaction.items);

  const totalAmount = useCallback(
    (typeId) => {
      console.log("totalIncome calculates");

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

  console.log("totalIncome : ", totalIncome);

  const IncomeCard = styled(Paper)(({ theme }) => ({
    width: "220px",
    height: "100px",
    padding: theme.spacing(2),
    backgroundImage: theme.palette.custom.gradients.income,
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
              color: alpha(theme.palette.success.contrastText, 0.85),
            })}
          >
            Total Income
          </Typography>
          <Typography
            variant="h1"
            sx={{ mt: "10px", color: "success.contrastText" }}
          >
            {" "}
            &#8377;{totalIncome}
          </Typography>
          <Typography
            variant="caption"
            sx={(theme) => ({
              color: alpha(theme.palette.success.contrastText, 0.85),
            })}
          >
            changes from last month
          </Typography>
        </Stack>
        <TrendingUpIcon
          sx={(theme) => ({
            color: alpha(theme.palette.success.contrastText, 0.85),
            mr: "5px",
          })}
        />
      </IncomeCard>
    </>
  );
}

export default TotalIncome;
