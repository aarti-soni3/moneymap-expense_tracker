import { Box, Stack, Typography } from "@mui/material";
import CategoryView from "../Category/CategoryView";
import CategoryButton from "../Category/CategoryButton";

function ManageCategories() {
  return (
    <>
      <Stack
        sx={{
          display: "flex",
          flexDirection: "column",
          backgroundColor: "background.default",
          padding: "0.5em",
        }}
      >
        <Box
          direction={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
          display={"flex"}
          sx={{
            mr: "20px",
            ml: "20px",
            pt: "10px",
          }}
        >
          <Typography variant="h3"  sx={{ flexGrow: "1" ,fontSize:{xs:'1rem',sm:'1.2rem',md:'1.4rem',lg:'1.5rem'}}}>
            Manage Category
          </Typography>
          <CategoryButton />
        </Box>
        <CategoryView />
      </Stack>
    </>
  );
}

export default ManageCategories;
