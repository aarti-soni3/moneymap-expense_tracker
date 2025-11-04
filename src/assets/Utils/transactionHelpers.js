export const GetCategoryNameListByType = (categories, typeId) => {
  //TODO: used
  if (!typeId) return [];
  return categories
    .filter((category) => category.typeId === typeId)
    .reduce((accumulator, category) => {
      if (!accumulator.includes(category)) accumulator.push(category.name);
      return accumulator;
    }, []);
};

  //TODO: used
  export const GetCategoryFromId = (categories,id) => {
    if (!categories || !Array.isArray(categories)) return "";
    const category = categories.find((c) => c.id === id);
    return category ? category.name : "";
};

export const GetIdFromCategory = (categories, category) => {
  const found = categories.find((c) => c.name === category);
  return found ? found.id : undefined;
};

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


