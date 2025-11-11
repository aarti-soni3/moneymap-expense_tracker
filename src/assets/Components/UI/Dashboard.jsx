import { Box, Container, Stack } from "@mui/material";
import TransactionView from "../Transaction/TransactionView";
import TransactionSummary from "../Summary Cards/TransactionSummary";
import SearchTransaction from "../Transaction/SearchTransaction";
import { useState } from "react";
import { FilterDataContext } from "../../Providers/FilterContext";
import ChartPaper from "./ChartPaper";

function Dashboard() {
  const [searchFilterData, setSearchFilterData] = useState("");
  const [categoryFilterData, setCategoryFilterData] = useState([]);

  const UpdateSeachFilterData = (currentValue) => {
    setSearchFilterData(currentValue);
  };

  const UpdateCategoryFilterData = (id, checked) => {
    if (checked) setCategoryFilterData((prevSelected) => [...prevSelected, id]);
    else
      setCategoryFilterData((prevSelected) =>
        prevSelected.filter((catId) => catId !== id)
      );
  };

  const resetCategoryFilterData = () => {
    setCategoryFilterData([]);
  };

  return (
    <>
      <Box sx={{ backgroundColor: "background.default", minHeight: "100vh" }}>
        <Container maxWidth="lg">
          <Stack spacing={4} sx={{ padding: "2rem 0" }}>
            <TransactionSummary />
           <ChartPaper/>
            <FilterDataContext.Provider
              value={{
                searchFilterData,
                UpdateSeachFilterData,
                categoryFilterData,
                UpdateCategoryFilterData,
                resetCategoryFilterData,
              }}
            >
              <SearchTransaction />
              <TransactionView />
            </FilterDataContext.Provider>
          </Stack>
        </Container>
      </Box>
    </>
  );
}

export default Dashboard;
