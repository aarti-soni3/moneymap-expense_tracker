import { Paper, Stack, Typography } from "@mui/material";
import DonutChart from "../Charts/DonutChart";

function ChartPaper() {
  return (
    <>
      <Paper
        elevation={2}
        sx={{
          maxHeight: { sx: "500px", md: "400px" },
          pb: 3,
        }}
      >
        <Stack
          spacing={3}
          sx={{
            p: 2.5,
          }}
        >
          <Typography variant="subtitle1" fontWeight={600}>
            Spending By Category
          </Typography>
          <DonutChart />
        </Stack>
      </Paper>
    </>
  );
}
export default ChartPaper;
