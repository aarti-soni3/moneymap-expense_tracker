import styled from "@emotion/styled";
import { AppBar, Box, Paper, Stack, Toolbar, Typography } from "@mui/material";
import TransactionButton from "../Transaction/TransactionButton";

function NavigationBar() {
  const Logo = styled(Paper)(({ theme }) => ({
    width: "55px",
    height: "53px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    fontSize: "1.2em",
    backgroundImage: theme.palette.custom.gradients.brand,
    borderRadius: "12px",
  }));

  return (
    <>
      <Box sx={{ flexGrow: "1" }}>
        <AppBar
          position="fixed"
          elevation={4}
          sx={{ backgroundColor: "background.paper"}}
        >
          <Toolbar>
            <Stack  direction={'row'} sx={{flexGrow:'1'}}>
              <Logo sx={{mt:'2px'}} elevation={6}>MET</Logo>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  ml: "10px",
                  mt:"5px",
                }}
              >
                <Typography
                  fontSize={20}
                  fontWeight={'bold'}
                  sx={{ color: "text.primary",textAlign:'end'}}
                >
                  MoneyMap Expense Tracker
                </Typography>
                <Typography
                  variant="caption"
                  fontSize={11}
                  sx={{ color: "text.secondary" }}
                  gutterBottom
                >
                  Manage your finances
                </Typography>
              </Box>
            </Stack>
            <TransactionButton />
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
}

export default NavigationBar;
