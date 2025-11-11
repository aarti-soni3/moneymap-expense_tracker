//TODO: used [always check for null or return else ]
export const GetIdFromTransationType = (transactionTypes, type) => {
  const found = transactionTypes.find((t) => t.name === type);
  return found ? found.id : undefined;
};

export const GetTransactionTypeFromId = (transactionType, id) => {
  if (!transactionType || !Array.isArray(transactionType)) return "";
  const type = transactionType.find((t) => t.id === id);
  return type ? type.name : "";
};

export const GetTransactionTypeColorFromTypeId = (transactionTypes, typeId) => {
  const type = transactionTypes.find(
    (transactionType) => transactionType.id === typeId
  );
  return type ? type.color : "";
};