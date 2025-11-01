export const loadFromStorage = (key) => {
  try {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
  } catch (error) {
    console.error("No data found : ", error);
    return null;
  }
};

export const saveToStorage = (key, data) => {
  try {
    const serializedState = JSON.stringify(data);
    localStorage.setItem(key, serializedState);
    return true;
  } catch (error) {
    console.error("Error saving data : ", error);
    return false;
  }
};

export const ClearStorage = (key) => {
  try {
    localStorage.removeItem(key);
    return true;
  } catch (error) {
    console.error("Error in deleting key : ", error);
    return false;
  }
};
