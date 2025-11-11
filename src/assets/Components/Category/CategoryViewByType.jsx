import { Stack, Typography, Grid } from "@mui/material";
import CategoryCardView from "./CategoryCardView";

function CategoryViewByType({
  IconComponent,
  categoryList,
  categoryName,
  categoryColor,
  amountSign,
}) {
  console.log(IconComponent);

  return (
    <>
      <Stack spacing={2} sx={{ mt: "30px", p: "10px" }}>
        <Typography
          fontSize={18}
          fontWeight={600}
          sx={{ color: categoryColor, display: "flex" }}
        >
          <IconComponent sx={{ mr: "10px" }} /> {categoryName}
        </Typography>

        <Grid
          container
          spacing={{ xs: 2, sm: 4, md: 6 }}
          size={6}
          rowSpacing={{ xs: 2, sm: 3, md: 3 }}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        >
          {categoryList.map((category) => {
            return (
              <CategoryCardView
                key={category.id}
                category={category}
                categoryColor={categoryColor}
                amountSign={amountSign}
              />
            );
          })}
        </Grid>
      </Stack>
    </>
  );
}

export default CategoryViewByType;
