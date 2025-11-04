export const cleanAmount = (formattedAmount) => {
console.log(typeof formattedAmount);
  console.log(formattedAmount.toString().replace(/[^\d.]/g, ""));
  const value = formattedAmount.toString().replace(/[^\d.]/g, "");
  console.log(value);
  return Number.parseFloat(value);
};
