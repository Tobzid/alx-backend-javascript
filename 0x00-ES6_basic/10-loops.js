/*  function appendToEachArrayValue to use ES6’s for...of operator. */

export default function appendToEachArrayValue(array, appendString) {
  const addArray = [];
  for (const value of array) {
    addArray.push(appendString + value);
  }
  return addArray;
}
