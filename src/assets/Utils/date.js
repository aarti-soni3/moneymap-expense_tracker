export const formatDate = (date) => {
  //TODO: used
  const day = date.getDate().toString().padStart(2, "0");
  const month = date.getMonth().toString().padStart(2, "0");
  const year = date.getFullYear();

  return `${year}-${parseInt(month) + 1}-${day}`;
};

//TODO:used
export const formateFromYMDToDMY = (dateString) => {
  // Creates a Date object from the string
  const date = new Date(dateString);

  // 'en-GB' locale formats dates as DD/MM/YYYY by default
  // You can customize options for separator and other details
  return date
    .toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    })
    .replace(/\//g, "-"); // Replaces '/' with '-' if desired
};

// function formatToDDMMYYYY(dateString) {
//   const parts = dateString.split('-'); // Splits "YYYY-MM-DD" into ["YYYY", "MM", "DD"]
//   return `${parts[2]}-${parts[1]}-${parts[0]}`; // Recombines as "DD-MM-YYYY"
// }
