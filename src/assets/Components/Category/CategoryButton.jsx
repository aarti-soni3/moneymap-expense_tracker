import { Button } from "@mui/material";
import { useState } from "react";
import CategoryDialog from "./CategoryDialog";
import AddIcon from "@mui/icons-material/Add";

function CategoryButton() {
  const [showCategoryDialog, setShowCategoryDialog] = useState(false);

  const handleOnCloseDialog = () => {
    setShowCategoryDialog(false);
  };

  return (
    <>
      <Button
      variant="contained"
        onClick={() => {
          setShowCategoryDialog(true);
        }}
      >
        <AddIcon /> Add Category
      </Button>
      <br />
      <br />
      <CategoryDialog
        open={showCategoryDialog}
        handleOnCloseDialog={handleOnCloseDialog}
      />
    </>
  );
}

export default CategoryButton;
