export const dateFormater = (date) => {
  let newDate = new Date(date).toLocaleDateString("en-FR", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  });
  return newDate;
};
