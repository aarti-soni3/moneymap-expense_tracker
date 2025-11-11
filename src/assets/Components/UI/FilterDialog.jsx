import {
  Box,
  Button,
  Checkbox,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControlLabel,
  FormGroup,
  Grid,
} from "@mui/material";
import { useContext } from "react";
import { useSelector } from "react-redux";
import { FilterDataContext } from "../../Providers/FilterContext";

function FilterDialog({ open, resetFilterDialog }) {
  const categories = useSelector((state) => state.category.items);

  const {
    categoryFilterData,
    UpdateCategoryFilterData,
    resetCategoryFilterData,
  } = useContext(FilterDataContext);

  const handleOnChange = (event) => {
    const id = event.target.id;
    const checked = event.target.checked;
    UpdateCategoryFilterData(id, checked);
  };

  const handleOnClearAll = () => {
    resetCategoryFilterData([]);
  };

  return (
    <>
      <Dialog
        open={open}
        onClose={resetFilterDialog}
        maxWidth="xs"
        fullWidth={true}
      >
        <DialogTitle sx={{ mb: "15px" }}>Filters</DialogTitle>
        <DialogContent>
          <Box
            // sx={{
            //   display: "flex",
            //     flexDirection: "column",
            //     flexWrap: "wrap",
            //   justifyContent: "space-between",
            //   gap: "16px",
            //     width: "100%",
            // }}
            sx={{
              display: "grid",
              gridTemplateColumns: "repeat(2,1fr)", // Dynamic columns
              gap: 1, // Spacing between grid items
            }}
          >
            {categories.map((category) => (
              <Box sx={{ flex: 1 }}>
                <FormControlLabel
                  control={
                    <Checkbox
                      id={category.id}
                      value={category.name}
                      checked={categoryFilterData.includes(category.id)}
                      onChange={handleOnChange}
                      //   sx={{
                      //     // flexBasis: "48%", // Approximately half the width, adjusts for gap
                      //     minWidth: "20px", // Minimum width for each column on smaller screens
                      //     padding: 2,
                      //   }}
                    />
                  }
                  label={category.name}
                />
              </Box>
            ))}
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleOnClearAll}>Clear All</Button>
          <Button onClick={resetFilterDialog}>Done</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default FilterDialog;
