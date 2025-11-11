import Box from "@mui/material/Box";
import { PieChart } from "@mui/x-charts/PieChart";
import { useSelector } from "react-redux";
import {
  GetCategoryFromId,
  GetIconIdFromCategoryId,
} from "../../Utils/categoryHelper";
import { getCategoryIconColor } from "../../Utils/icon";
import { useTheme } from "@emotion/react";
import { useMediaQuery } from "@mui/material";
import { useMemo } from "react";

export default function DonutChart() {
  const transactions = useSelector((state) => state.transaction.items);
  const categories = useSelector((state) => state.category.items);

  const amountBycategories = transactions.reduce(
    (accumulator, currentValue) => {
      const amount = currentValue.amount;
      const category = currentValue.categoryId;

      if (accumulator[category]) {
        accumulator[category] += amount;
      } else {
        accumulator[category] = amount;
      }
      return accumulator;
    },
    {}
  );

  const valueFormatter = (item) => `₹${item.value}`;

  const transformedData = Object.entries(amountBycategories).map(
    ([id, amount]) => ({
      id,
      value: amount,
      label: GetCategoryFromId(categories, id),
      color: getCategoryIconColor(GetIconIdFromCategoryId(categories, id)),
    })
  );

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm")); // Check if screen is 'sm' or smaller

  const legendProps = useMemo(() => {
    if (isSmallScreen) {
      return {
        direction: "horizontal",
        position: { vertical: "middle", horizontal: "center" },
      };
    }
    // Default for larger screens
    return {
      direction: "vertical",
      position: { vertical: "top", horizontal: "right" },
    };
  }, [isSmallScreen]);

  return (
    <Box sx={{ width: "100%" }}>
      <PieChart
        slotProps={{
          legend: legendProps,
        }}
        color={transformedData.map((data) => data.color)}
        height={300}
        width={300}
        series={[
          {
            data: transformedData,
            innerRadius: 60,
            // arcLabel:'label',
            arcLabelMinAngle: 20,
            valueFormatter,
          },
        ]}
        skipAnimation={false}
      />
    </Box>
  );
}
