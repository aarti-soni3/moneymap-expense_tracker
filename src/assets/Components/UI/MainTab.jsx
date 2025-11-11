import { Box, Tab, Tabs } from "@mui/material";
import { useState } from "react";
import CustomTabPanel from "./CustomTabPanel";
import CategoryButton from "../Category/CategoryButton";
import Dashboard from "./Dashboard";
import ManageCategories from "./ManageCategories";

function MainTab() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Box sx={{ width: "100%",backgroundColor:'background.paper' }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs value={value} onChange={handleChange}>
            <Tab value={0} label="Dashboard" />
            <Tab value={1} label="Categories" />
          </Tabs>
        </Box>
        <CustomTabPanel value={value} index={0}>
          <Dashboard />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <ManageCategories />
        </CustomTabPanel>
      </Box>
    </>
  );
}

export default MainTab;
