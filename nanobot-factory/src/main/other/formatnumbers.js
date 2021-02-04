// Format numbers to have commas.
export const formatNumbers = (number) => {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};
