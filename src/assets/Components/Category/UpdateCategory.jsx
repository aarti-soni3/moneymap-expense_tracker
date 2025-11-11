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
import { useEffect, useState } from "react";
import {
  GetIdFromTransationType,
  GetTransactionTypeFromId,
} from "../../Utils/transactionHelpers";
import { useDispatch, useSelector } from "react-redux";
import { categoryIcons } from "../../InitialData/CategoryIconData";

import {
  getCategoryIconComponentName,
  getNameFromIconComponent,
} from "../../Utils/icon";
import CategoryIconButton from "./CategoryIconButton";
import { updateCategory } from "../../Store/CategorySlice";

function UpdateCategory({ open, selectedCategory, resetUpdateDialog }) {
  const initialData = {
    id: "",
    name: "",
    typeId: "",
    iconId: "",
  };

  const dispatch = useDispatch();
  const [categoryData, setCategoryData] = useState(initialData);
  const transactionTypes = useSelector(
    (state) => state.setting.transactionType
  );

  useEffect(() => {
    if (selectedCategory) {
      const typeName = GetTransactionTypeFromId(
        transactionTypes,
        selectedCategory.typeId
      );

      const getIconComponent = getCategoryIconComponentName(
        selectedCategory.iconId
      );

      setCategoryData({
        id: selectedCategory.id,
        name: selectedCategory.name,
        typeId: typeName,
        iconId: getIconComponent,
      });
    }
  }, [selectedCategory, transactionTypes]);

  const isSelected = (id, currentIconId) => {
    return currentIconId === id;
  };

  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setCategoryData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleOnCategoryIconButtonClick = (id) => {
    console.log("icon id : ", id);
    setCategoryData((prevData) => ({
      ...prevData,
      iconId: id,
    }));
  };

  const handleOnUpdate = () => {
    const newdata = {
      ...categoryData,
      typeId: GetIdFromTransationType(transactionTypes, categoryData.typeId),
      iconId: getNameFromIconComponent(categoryData.iconId),
    };

    console.log("newwww : ", newdata);

    dispatch(updateCategory(newdata));
    resetUpdateDialog();
  };

  if (!selectedCategory) return;

  return (
    <>
      <Dialog open={open} onClose={resetUpdateDialog}>
        <DialogTitle sx={{ mb: "15px" }}>Update Category</DialogTitle>
        <DialogContent>
          <TextField
            name="name"
            label="Category Name"
            value={categoryData.name}
            onChange={handleOnChange}
            sx={{ mr: "20px", mt: "10px" }}
            required
          />

          <TextField
            type="select"
            name="typeId"
            label="Transaction Type"
            value={categoryData.typeId}
            onChange={handleOnChange}
            sx={{ width: "222px", mt: "10px" }}
            select
          >
            {transactionTypes.map((transactionType) => {
              return (
                <MenuItem key={transactionType.id} value={transactionType.name}>
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
                        isSelected={isSelected(
                          icon.id,
                          getNameFromIconComponent(categoryData.iconId)
                        )}
                        handleOnButtonClick={() => {
                          handleOnCategoryIconButtonClick(icon.id);
                        }}
                      />
                    );
                  })}
                </Grid>
              </Grid>
            </Box>
          </List>
        </DialogContent>
        <DialogActions>
          <Button onClick={resetUpdateDialog}>Cancel</Button>
          <Button onClick={handleOnUpdate}>Update</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default UpdateCategory;
