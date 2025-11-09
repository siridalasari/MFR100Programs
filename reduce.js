// reduce function

const reduce = function(array, reducer, initialValue = array[0]) {
  let result = initialValue;

  for (let index = 0; index < array.length; index++) {
    result = reducer(result, array[index]); // expression should return 1
  }

  return result;
}