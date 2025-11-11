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

export const GetCategoryByType = (categories, typeId) => {
  //TODO: used
  if (!typeId) return [];
  return categories.filter((category) => category.typeId === typeId);
};

//TODO: used
export const GetCategoryFromId = (categories, id) => {
  if (!categories || !Array.isArray(categories)) return "";
  const category = categories.find((c) => c.id === id);
  return category ? category.name : "";
};

export const GetIdFromCategory = (categories, category) => {
  const found = categories.find((c) => c.name === category);
  return found ? found.id : undefined;
};

export const GetIconIdFromCategoryId = (categories, id) => {
  const found = categories.find((c) => c.id === id);
  return found ? found.iconId : undefined;
};