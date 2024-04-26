export const standardizeDateString = (date: string) => {
  const givenDate = new Date(date);

  return givenDate.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
};
