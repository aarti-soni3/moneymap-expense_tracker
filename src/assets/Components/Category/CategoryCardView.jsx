import { useState } from "react";
import styled from "@emotion/styled";
import DisplayMUIIcon from "../UI/DisplayMUIIcon";
import { getIconById } from "../../Utils/icon";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import UpdateCategory from "./UpdateCategory";
import DeleteCategory from "./DeleteCategory";
import {
  Avatar,
  Box,
  IconButton,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import { useSelector } from "react-redux";

function CategoryCardView({ category, categoryColor, amountSign }) {
  // const [isHovered, setIsHovered] = useState(false);
  const [isOpenUpdateDialog, setIsOpenUpdateDialog] = useState(false);
  const [isOpenDeleteDialog, setIsOpenDeleteDialog] = useState(false);

  const transactions = useSelector((state) => state.transaction.items);

  const transactionByCategory = transactions.filter((transaction) => {
    return transaction.categoryId === category.id;
  });

  const amountByCategory = transactionByCategory.reduce(
    (accumulator, transaction) => {
      return (accumulator += transaction.amount);
    },
    0
  );

  const CategoryCard = styled(Paper)(({ theme }) => ({
    width: "180px",
    height: "105px",
    display: "flex",
    justifyContent: "center",
    color: "white",
    fontSize: "1.2em",
    backgroundImage: theme.palette.primary.contrastText,
    borderRadius: "12px",
  }));

  const iconData = getIconById(category.iconId);
  const borderTopStyle = `3.5px solid ${iconData.color}`;

  const handleOnUpdate = () => {
    setIsOpenUpdateDialog(true);
  };

  const handleOnDelete = () => {
    setIsOpenDeleteDialog(true);
  };

  // const handleOnMouseEnter = () => {
  //   setIsHovered(true);
  // };

  // const handleOnMouseLeave = () => {
  //   setIsHovered(false);
  // };

  const resetUpdateDialog = () => {
    setIsOpenUpdateDialog(false);
  };

  const resetDeleteDialog = () => {
    setIsOpenDeleteDialog(false);
  };

  return (
    <>
      <CategoryCard
        elevation={4}
        sx={{
          display: "flex",
          alignContent: "space-between",
          // justifyContent: "space-between", // Changed from "space-between" to "flex-start"
          // Ensure vertical alignment at the top
          borderTop: borderTopStyle,
          pt: 2,
          pl: 2,
        }}
      >
        <Stack
          spacing={0.5}
          direction="column"
          display="flex"
          // onMouseEnter={handleOnMouseEnter}
          // onMouseLeave={handleOnMouseLeave}
          sx={{
            // justifyContent: "flex-start",
            // alignItems: "flex-start",
            width: "100%",
          }} // Ensure children are at flex-start and take full width
        >
          <Box
            gap={1.5}
            sx={{
              display: "flex",
              flexDirection: "row",
              // justifyContent: "flex-start",
              // alignItems: "center", // Align items vertically centered in the row
              width: "100%",
            }}
          >
            <Avatar sx={{ ml: "5px", backgroundColor: iconData.color }}>
              <DisplayMUIIcon iconName={iconData.component} color={"white"} />
            </Avatar>
            <Stack sx={{ mr: "5px" }}>
              <Typography
                color="text.primary"
                fontSize={15}
                fontWeight={600}
                sx={{ whiteSpace: "wrap" }}
              >
                {category.name}
              </Typography>
              <Typography color={categoryColor} fontWeight={600}>
                {amountSign + amountByCategory}
              </Typography>
            </Stack>
          </Box>

          {/* {isHovered ? ( */}
          <Stack direction={"row"} spacing={0.3} alignSelf={"end"}>
            <IconButton onClick={() => handleOnUpdate()}>
              <EditOutlinedIcon color="primary" />
            </IconButton>
            <IconButton onClick={() => handleOnDelete()}>
              <DeleteOutlineOutlinedIcon color="error" />
            </IconButton>
          </Stack>
          {/* ) : (
            ""
          )} */}
        </Stack>
      </CategoryCard>

      <UpdateCategory
        open={isOpenUpdateDialog}
        selectedCategory={category}
        resetUpdateDialog={resetUpdateDialog}
      />

      <DeleteCategory
        open={isOpenDeleteDialog}
        selectedCategory={category}
        resetDeleteDialog={resetDeleteDialog}
      />
    </>
  );
}

export default CategoryCardView;
