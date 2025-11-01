import { createSlice } from "@reduxjs/toolkit";
import { initialTransactionData } from "../../initialData";
// import { loadFromStorage } from "../Utils/LocalStorage";
// import { TRANSACTION_KEY } from "../Utils/Constants";

// const persistedState = loadFromStorage(TRANSACTION_KEY);

const transactionSlice = createSlice({
  //   initialState: persistedState || initialTransactionData,
  initialState: initialTransactionData,
  name: "transaction",
  reducers: {
    addTransaction: () => {},
    updateTransaction: () => {},
    deleteTransaction: () => {},
  },
});

export const { addTransaction, updateTransaction, deleteTransaction } =
  transactionSlice.actions;

export const transactionReducer = transactionSlice.reducer;
