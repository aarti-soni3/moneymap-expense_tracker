// #region Imports
import {
  Dialog,
  Button,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
  Typography,
  Stack,
  Avatar,
  Box,
} from "@mui/material";
// import { getCategoryIconComponentName } from "../../Utils/icon";

import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { deleteCategory } from "../../Store/CategorySlice";
import DisplayMUIIcon from "../UI/DisplayMUIIcon";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";

// #endregion

function DeleteCategory({ open, selectedCategory, resetDeleteDialog }) {
  const dispatch = useDispatch();
  const [categoryData, setCategoryData] = useState({
    id: "",
    name: "",
    iconId: "",
  });

  const handleOnDelete = () => {
    console.log(categoryData.id);
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
        <DialogContent>
          <DialogContentText>
            <Stack direction={"column"} alignItems={"center"} gap={1}>
              <Avatar sx={{ backgroundColor: "pink" }}>
                <DisplayMUIIcon
                  iconName={"Delete Outlined"}
                  color={"error.dark"}
                />
              </Avatar>
              <Typography variant="h3">Delete Category?</Typography>
              <Box display={"flex"} flexDirection={"row"} gap={1}>
                <Typography variant="subtitle2" fontWeight={600} align="center">
                  {categoryData.name}
                </Typography>
                <Typography variant="subtitle2" align="center">
                  Category will be permanently removed.
                </Typography>
              </Box>
            </Stack>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button variant="outlined" color="error" onClick={resetDeleteDialog}>
            Cancel
          </Button>
          <Button
            variant="contained"
            color="error"
            onClick={handleOnDelete}
            autoFocus
          >
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default DeleteCategory;
