import { Box, Button, Paper, Stack, TextField } from "@mui/material";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
import TransactionButton from "./TransactionButton";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { useContext, useState } from "react";
import { FilterDataContext } from "../../Providers/FilterContext";
import FilterDialog from "../UI/FilterDialog";

function SearchTransaction() {
  const { searchFilterData, UpdateSeachFilterData } =
    useContext(FilterDataContext);

  const [showFilterDialog, setShowFilterDialog] = useState(false);

  const handleOnCloseDialog = () => {
    setShowFilterDialog(false);
  };

  const handleOnChange = (event) => {
    UpdateSeachFilterData(event.target.value);
  };

  return (
    <>
      <Paper
        elevation={2}
        sx={{
          maxHeight: "150px",
          // maxWidth: "80%",
          // alignSelf:'center',
        }}
      >
        <Stack
          spacing={1.5}
          sx={{
            p: 2.5,
          }}
        >
          <TextField
            label="Search By Title & Description"
            onChange={(e) => {
              handleOnChange(e);
            }}
            value={searchFilterData}
            InputProps={{
              startAdornment: <SearchOutlinedIcon />,
            }}
          ></TextField>
          <Box>
            <Button
              color="black"
              sx={{ backgroundColor: "#eaebecff", mr: "15px" }}
              onClick={() => {
                setShowFilterDialog(true);
              }}
            >
              <FilterAltOutlinedIcon /> Filter by category
            </Button>
            <TransactionButton />
          </Box>
        </Stack>
      </Paper>

      <FilterDialog
        open={showFilterDialog}
        resetFilterDialog={handleOnCloseDialog}
      />
    </>
  );
}

export default SearchTransaction;
