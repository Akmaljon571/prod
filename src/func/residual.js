export const residual = (date) => {
  const today = new Date();
  const courseStartDate = new Date(date);
  const timeDifference = courseStartDate - today;

  return Math.ceil(timeDifference / (1000 * 60 * 60 * 24));
};
