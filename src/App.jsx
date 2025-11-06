import { Box } from "@mui/material";
import "./App.css";
import CategoryButton from "./assets/Components/CategoryButton";
import TransactionButton from "./assets/Components/TransactionButton";
import TransactionView from "./assets/Components/TransactionView";

function App() {
  return (
    <>
      <Box>
        <TransactionButton />
        <CategoryButton />
      </Box>
      <TransactionView />
    </>
  );
}

export default App;
