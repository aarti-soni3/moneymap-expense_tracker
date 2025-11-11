import TrendingUpOutlinedIcon from "@mui/icons-material/TrendingUpOutlined";
import TrendingDownOutlinedIcon from "@mui/icons-material/TrendingDownOutlined";
import { useSelector } from "react-redux";
import CategoryViewByType from "./CategoryViewByType";
import { GetIdFromTransationType } from "../../Utils/transactionHelpers";
import { GetCategoryByType } from "../../Utils/categoryHelper";

function CategoryView() {
  const categories = useSelector((state) => state.category.items);
  const transactionTypes = useSelector(
    (state) => state.setting.transactionType
  );

  const incomeCategories = GetCategoryByType(
    categories,
    GetIdFromTransationType(transactionTypes, "Income")
  );

  const expenseCategories = GetCategoryByType(
    categories,
    GetIdFromTransationType(transactionTypes, "Expense")
  );

  return (
    <>
      <CategoryViewByType
        IconComponent={TrendingUpOutlinedIcon}
        categoryList={incomeCategories}
        categoryName={"Income"}
        categoryColor={"success.dark"}
        amountSign={"+"}
      />

      <CategoryViewByType
        IconComponent={TrendingDownOutlinedIcon}
        categoryList={expenseCategories}
        categoryName={"Expense"}
        categoryColor={"error.dark"}
        amountSign={"-"}
      />
    </>
  );
}

export default CategoryView;
