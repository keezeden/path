// Get min total value from array
const min = (array, field) =>
  array.reduce((prev, curr) => {
    return prev[field] < curr[field] ? prev : curr;
  });

export { min };
