// #region Imports
import {
  Dialog,
  Button,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import { getCategoryIconComponentName } from "../Utils/icon";

import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { deleteCategory } from "../Store/CategorySlice";
import DisplayMUIIcon from "./DisplayMUIIcon";

// #endregion

function DeleteCategory({ open, selectedCategory, resetDeleteDialog }) {
  const dispatch = useDispatch();
  const [categoryData, setCategoryData] = useState({
    id: "",
    name: "",
    iconId: "",
  });

  const handleOnDelete = () => {
    console.log(categoryData.id)
    dispatch(deleteCategory(categoryData.id));
    resetDeleteDialog();
  };

  useEffect(() => {
    if (selectedCategory) {
      setCategoryData({
        id: selectedCategory.id,
        name: selectedCategory.name,
        iconId: selectedCategory.iconId,
      });
    }
  }, [selectedCategory]);

  if (!selectedCategory) return null;

  return (
    <>
      <Dialog open={open} onClose={resetDeleteDialog}>
        <DialogTitle>Delete Category?</DialogTitle>
        <DialogContent>
          <DialogContentText sx={{display:"flex"}}>
            <DisplayMUIIcon
              iconName={getCategoryIconComponentName(categoryData.iconId)}
            />
            {categoryData.name} Category will be permanently removed.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={resetDeleteDialog}>Cancel</Button>
          <Button onClick={handleOnDelete} autoFocus>
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default DeleteCategory;
