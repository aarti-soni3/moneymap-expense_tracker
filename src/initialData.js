export const initialTransactionData = {
  items: [
    {
      id: "txn_1730448000000",
      amount: 250.75,
      categoryId: "cat_food",
      type: "expense",
      date: "2025-11-01",
      description: "Groceries from supermarket",
      createdAt: "2025-11-01T10:30:00.000Z",
      // updatedAt: "2025-11-01T10:30:00.000Z",
    },
    {
      id: "txn_1730448100000",
      amount: 5000,
      categoryId: "cat_income",
      type: "income",
      date: "2025-11-01",
      description: "Freelance payment",
      createdAt: "2025-11-01T11:00:00.000Z",
      // updatedAt: "2025-11-01T11:00:00.000Z",
    },
  ],
};

export const initialCategoryData = {
  items: [
    {
      id: "cat_food",
      name: "Food & Dining",
      type: "expense",
      color: "#FF5733",
      icon: "restaurant",
      isDefault: true,
      createdAt: "2025-11-01T00:00:00.000Z",
    },
    {
      id: "cat_transport",
      name: "Transportation",
      type: "expense",
      color: "#3498db",
      icon: "directions_car",
      isDefault: true,
      createdAt: "2025-11-01T00:00:00.000Z",
    },
    {
      id: "cat_income",
      name: "Salary",
      type: "income",
      color: "#27ae60",
      icon: "attach_money",
      isDefault: true,
      createdAt: "2025-11-01T00:00:00.000Z",
    },
     {
      id: "cat_bonus",
      name: "Bonus",
      type: "income",
      color: "#227ac2ff",
      icon: "attach_money",
      isDefault: true,
      createdAt: "2025-11-01T00:00:00.000Z",
    },
  ],
};

export const initialSettings = {
  currency: "INR",
  dateFormat: "DD/MM/YYYY",
  theme: "light",
  defaultView: "monthly",
};
// metadata: {
// version: "1.0.0",
// lastBackup: "2025-11-01T12:00:00.000Z"
