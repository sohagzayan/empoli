export const getFormatDate = (dateString: any) => {
  let date = new Date(dateString);
  var formattedDate = date.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  return formattedDate;
};
