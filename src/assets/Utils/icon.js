import { categoryIcons } from "../InitialData/CategoryIconData";

export const getNameFromIconComponent = (iconComponent) => {
  const name = String(iconComponent).replace(" ", "_");
  return name.toLowerCase();
};

//TODO:used
// Helper to get icon by id
export const getIconById = (id) => {
  return categoryIcons.find((icon) => icon.id === id);
};

// Helper to get component name by id
export const getCategoryIconComponentName = (id) => {
  const icon = getIconById(id);
  return icon ? icon.component : "Category";
};

export const getCategoryIconColor = (id) => {
  const icon = getIconById(id);
  return icon ? icon.color : "gray.300";
};
