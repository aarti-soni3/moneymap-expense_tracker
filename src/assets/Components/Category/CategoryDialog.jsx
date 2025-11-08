import {
  Dialog,
  Button,
  DialogActions,
  DialogContent,
  List,
  ListItem,
  ListItemText,
  DialogTitle,
  Typography,
  IconButton,
} from "@mui/material";

import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useSelector } from "react-redux";
import DisplayMUIIcon from "../UI/DisplayMUIIcon";
import UpdateCategory from "./UpdateCategory";
import { useState } from "react";
import {
  getCategoryIconColor,
  getCategoryIconComponentName,
} from "../../Utils/icon";
import AddCategory from "./AddCategory";
import DeleteCategory from "./DeleteCategory";

function CategoryDialog({ open, handleOnCloseDialog }) {
  const [selectedUpdatecategory, setSelectedUpdateCategory] = useState(null);
  const [selectedDeletecategory, setSelectedDeleteCategory] = useState(null);
  const [isOpenAddDialog, setIsOpenAddDialog] = useState(false);
  const [isOpenUpdateDialog, setIsOpenUpdateDialog] = useState(false);
  const [isOpenDeleteDialog, setIsOpenDeleteDialog] = useState(false);

  const categories = useSelector((state) => state.category.items);

  const handleOnEdit = (category) => {
    setSelectedUpdateCategory(category);
    setIsOpenUpdateDialog(true);
  };

  const handleOnDelete = (category) => {
    setSelectedDeleteCategory(category);
    setIsOpenDeleteDialog(true);
  };

  const resetAddDialog = () => {
    setIsOpenAddDialog(false);
  };

  const resetUpdateDialog = () => {
    setIsOpenUpdateDialog(false);
  };

  const resetDeleteDialog = () => {
    setIsOpenDeleteDialog(false);
  };

  const handleOnCancel = () => {
    handleOnCloseDialog();
  };
  return (
    <>
      <Dialog open={open} onClose={handleOnCloseDialog}>
        <DialogTitle sx={{ mb: "15px" }}>Manage Category</DialogTitle>
        <DialogContent>
          <Button
            onClick={() => {
              setIsOpenAddDialog(true);
            }}
            variant="outlined"
            sx={{ width: "220px", mb: "20px" }}
          >
            <AddIcon /> New Category
          </Button>

          <Typography variant="subtitle1" display="block">
            Income
          </Typography>
          <List
            sx={{
              width: "100%",
              maxWidth: 360,
              bgcolor: "background.paper",
            }}
          >
            {categories.map((category) => (
              <ListItem
                key={category.id}
                disableGutters
                secondaryAction={
                  <>
                    <IconButton
                      edge="end"
                      onClick={() => handleOnEdit(category)}
                      sx={{ mr: 1 }}
                    >
                      <EditIcon />
                    </IconButton>
                    <IconButton
                      edge="end"
                      onClick={() => handleOnDelete(category)}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </>
                }
              >
                <DisplayMUIIcon
                  iconName={getCategoryIconComponentName(category.iconId)}
                  color={getCategoryIconColor(category.iconId)}
                />
                <ListItemText>{category.name}</ListItemText>
              </ListItem>
            ))}
          </List>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleOnCancel}>Cancel</Button>
        </DialogActions>
      </Dialog>

      <UpdateCategory
        open={isOpenUpdateDialog}
        selectedCategory={selectedUpdatecategory}
        resetUpdateDialog={resetUpdateDialog}
      />

      <AddCategory open={isOpenAddDialog} resetUpdateDialog={resetAddDialog} />

      <DeleteCategory
        open={isOpenDeleteDialog}
        selectedCategory={selectedDeletecategory}
        resetDeleteDialog={resetDeleteDialog}
      />
    </>
  );
}
export default CategoryDialog;
