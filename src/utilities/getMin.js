// Get min total value from array
const min = (array, field) =>
  array.reduce((prev, curr) => (prev[field] < curr[field] ? prev : curr));

export { min };
