import { Box } from "@mui/material";
import "./App.css";
import NavigationBar from "./assets/Components/UI/NavigationBar";
import CustomThemeProvider from "./assets/Providers/CustomThemeProvider";
import MainTab from "./assets/Components/UI/MainTab";

function App() {
  return (
    <>
      <CustomThemeProvider>
        <NavigationBar />
        {/* TODO: used */}
        <Box
          sx={{
            mt: "64px",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
          }}
        />
        <MainTab />
      </CustomThemeProvider>
    </>
  );
}

export default App;
