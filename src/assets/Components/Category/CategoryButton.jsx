import { Button, Typography } from "@mui/material";
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
        <AddIcon
          sx={{
            fontSize: {
              xs: "1.3rem",
              sm: "1rem",
              md: "1.2rem",
              lg: "1.4rem",
              xl: "1.6rem",
            },
          }}
        />
        <Typography
          color="primary.contrastText"
          sx={{
            fontSize: {
              xs: "0",
              sm: "0.8rem",
              md: "1rem",
            },
          }}
        >
          Add Category
        </Typography>
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
