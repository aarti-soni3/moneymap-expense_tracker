import { configureStore } from "@reduxjs/toolkit";
import { transactionReducer } from "./TransactionSlice";
import { categoryReducer } from "./CategorySlice";
import { settingReducer } from "./SettingSlice";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { CATEGORY_KEY, SETTING_KEY, TRANSACTION_KEY } from "../Utils/Constants";

const persistTransactionConfig = {
  key: TRANSACTION_KEY,
  storage: storage,
  version: 1,
};

const persistCategoryConfig = {
  key: CATEGORY_KEY,
  storage: storage,
  version: 1,
};

const persistSettingConfig = {
  key: SETTING_KEY,
  storage: storage,
  version: 1,
};

const persistedTransactionReducer = persistReducer(
  persistTransactionConfig,
  transactionReducer
);
const persistedCategoryReducer = persistReducer(
  persistCategoryConfig,
  categoryReducer
);
const persistedSettingReducer = persistReducer(
  persistSettingConfig,
  settingReducer
);

export const store = configureStore({
  reducer: {
    transaction: persistedTransactionReducer,
    category: persistedCategoryReducer,
    setting: persistedSettingReducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["persist/PERSIST", "persist/REHYDRATE"],
      },
    });
  },
});

export const persistor = persistStore(store);
