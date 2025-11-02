import { Dialog, Tabs, Tab } from "@mui/material";
import { useState } from "react";
import { useSelector } from "react-redux";
import TransactionPanel from "./TransactionPanel";
import TransactionForm from "./TransactionForm";

function TransactionDialog({ open, handleOnClose, handleOnSave }) {
  const [currentTab, setCurrentTab] = useState("income");

  const categories = useSelector((state) => state.category.items);

  const GetCategoryNameListByType = (type) => {
    return categories
      .filter((category) => {
        return category.type === type;
      })
      .reduce((accumulator, category) => {
        if (!accumulator.includes(category)) accumulator.push(category.name);
        return accumulator;
      }, []);
  };

  const handleTab = (e, tab) => {
    setCurrentTab(tab);
  };

  return (
    <>
      <Dialog open={open}>
        <Tabs
          value={currentTab}
          onChange={handleTab}
          sx={{ marginTop: "10px" }}
          textColor="primary"
          indicatorColor="primary"
        >
          <Tab value="income" label="Income"></Tab>
          <Tab value="expense" label="Expense"></Tab>
        </Tabs>
        <TransactionPanel index={"income"} value={currentTab}>
          <TransactionForm
            dialogTitle={"Add Income"}
            categories={GetCategoryNameListByType("income")}
            transactionTab={currentTab}
            handleOnSave={handleOnSave}
            handleOnClose={handleOnClose}
          />
        </TransactionPanel>

        <TransactionPanel index={"expense"} value={currentTab}>
          <TransactionForm
            dialogTitle={"Add Expense"}
            categories={GetCategoryNameListByType("expense")}
            transactionTab={currentTab}
            handleOnSave={handleOnSave}
            handleOnClose={handleOnClose}
          />
        </TransactionPanel>
      </Dialog>
    </>
  );
}

export default TransactionDialog;
