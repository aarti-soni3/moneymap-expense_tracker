import { Button } from "@mui/material";
import { useState } from "react";
import CategoryDialog from "./CategoryDialog";

function CategoryButton() {
  const [showCategoryDialog, setShowCategoryDialog] = useState(false);

  const handleOnCloseDialog = () => {
    setShowCategoryDialog(false);
  };

  return (
    <>
      <Button
        variant="outlined"
        onClick={() => {
          setShowCategoryDialog(true);
        }}
      >
        Manage Categories
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
