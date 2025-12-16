import {
  Dialog,
  Button,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  MenuItem,
  Typography,
  List,
  Grid,
  Box,
} from "@mui/material";
import { useState } from "react";
import {
  GetIdFromTransationType,
  GetTransactionTypeFromId,
} from "../../Utils/transactionHelpers";
import { useDispatch, useSelector } from "react-redux";
import { categoryIcons } from "../../InitialData/CategoryIconData";
import { addCategory } from "../../Store/CategorySlice";
import CategoryIconButton from "./CategoryIconButton";

function AddCategory({ open, resetUpdateDialog }) {
  const dispatch = useDispatch();
  const transactionTypes = useSelector(
    (state) => state.setting.transactionType
  );

  const initialData = {
    name: "",
    typeId: GetTransactionTypeFromId(transactionTypes, transactionTypes[0].id),
    iconId: categoryIcons[0].id,
  };

  const [categoryData, setCategoryData] = useState(initialData);

  const isSelected = (id, currentIconId) => {
    return currentIconId === id;
  };

  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setCategoryData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleOnCategoryIconButtonClick = (id) => {
    setCategoryData((prevData) => ({
      ...prevData,
      iconId: id,
    }));
  };

  const handleOnSave = () => {
    const payload = {
      ...categoryData,
      typeId: GetIdFromTransationType(transactionTypes, categoryData.typeId),
    };

    dispatch(addCategory(payload));
    resetUpdateDialog();
    setCategoryData(initialData);
  };

  const handleOnClose = () => {
    setCategoryData(initialData);
    resetUpdateDialog();
  };

  return (
    <>
      <Dialog open={open} onClose={resetUpdateDialog}>
        <form onSubmit={handleOnSave}>
          <DialogTitle sx={{ mb: "15px" }}>Add Category</DialogTitle>
          <DialogContent>
            <TextField
              name="name"
              label="Category Name"
              value={categoryData.name}
              onChange={handleOnChange}
              sx={{ mr: "20px", mt: "15px" }}
              required
            />

            <TextField
              type="select"
              name="typeId"
              label="Transaction Type"
              value={categoryData.typeId}
              onChange={handleOnChange}
              sx={{ width: "222px", mt: "15px" }}
              select
            >
              {transactionTypes.map((transactionType) => {
                return (
                  <MenuItem
                    key={transactionType.id}
                    value={transactionType.name}
                  >
                    {transactionType.name}
                  </MenuItem>
                );
              })}
            </TextField>

            <br />
            <br />

            <Typography name="icon">Icons</Typography>
            <List>
              <Box sx={{ flexGrow: 1, padding: 2 }}>
                <Grid container spacing={2}>
                  <Grid>
                    {categoryIcons.map((icon) => {
                      return (
                        <CategoryIconButton
                          key={icon.id}
                          iconId={icon.id}
                          iconComponent={icon.component}
                          iconColor={icon.color}
                          isSelected={isSelected(icon.id, categoryData.iconId)}
                          handleOnButtonClick={handleOnCategoryIconButtonClick}
                        />
                      );
                    })}
                  </Grid>
                </Grid>
              </Box>
            </List>
          </DialogContent>
          <DialogActions>
            <Button variant="outlined" onClick={handleOnClose}>Cancel</Button>
            <Button variant="contained" type="submit">Save</Button>
          </DialogActions>
        </form>
      </Dialog>
    </>
  );
}

export default AddCategory;
