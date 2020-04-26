export function sum(array) {
  let result = 0;

  if (array != null && array.length) {
    for (const value of array) {
      if (value !== undefined) {
        result = result + value;
      }
    }
  }

  return result;
}