// reduce function

const reduce = function(array, reducer, initialValue = array[0]) {
  let result = initialValue;

  for (let index = 0; index < array.length; index++) {
    result = reducer(result, array[index]); // expression should return 1
  }

  return result;
}

//# 1. Festival Ribbon Count
const ribbonCount = (ribbons) => {
  return ribbons.reduce(countBlue, 0);
};

// 10. Library Return Counter
const returnedCount = (booksLog) => {
  const count = (booksLog.reduce(ifEqual, [0, "Dune"]))[0];
  return count;
}


const sort = (array) => {
  const sorted = array.slice();
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if(sorted[i] < sorted[j]) {
        
      }
    }
  }
}