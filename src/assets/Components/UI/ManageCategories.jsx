import { Box, Button, Stack, Typography } from "@mui/material";
import CategoryButton from "../Category/CategoryButton";

function ManageCategories() {
  return (
    <>
      <Box
        direction={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
        display={"flex"}
        sx={{ mr: "20px", ml: "20px", pt: "10px" }}
      >
        <Typography variant="h2" sx={{ flexGrow: "1" }}>
          Manage Category
        </Typography>
        <CategoryButton />
      </Box>
    </>
  );
}

export default ManageCategories;
