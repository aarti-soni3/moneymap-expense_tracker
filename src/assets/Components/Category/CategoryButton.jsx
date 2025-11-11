import { Button } from "@mui/material";
import { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import AddCategory from "./AddCategory";

function CategoryButton() {
  // const [showCategoryDialog, setShowCategoryDialog] = useState(false);
  const [isOpenAddDialog, setIsOpenAddDialog] = useState(false);

  const resetAddDialog = () => {
    setIsOpenAddDialog(false);
  };

  // const handleOnCloseDialog = () => {
  //   setShowCategoryDialog(false);
  // };

  return (
    <>
      <Button
        variant="contained"
        onClick={() => {
          setIsOpenAddDialog(true);
          //   setShowCategoryDialog(true);
        }}
      >
        <AddIcon /> Add Category
      </Button>
      <br />
      <br />
      {/* <CategoryDialog
        open={showCategoryDialog}
        handleOnCloseDialog={handleOnCloseDialog}
      /> */}

      <AddCategory open={isOpenAddDialog} resetUpdateDialog={resetAddDialog} />
    </>
  );
}

export default CategoryButton;
