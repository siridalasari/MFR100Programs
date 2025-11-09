// filter function

const filter = function (array, predicate) {
  const fliteredElemets = [];

  for (let index = 0; index < array.length; index++) {
    if (predicate(array[index])) {
      fliteredElemets.push(array[index]);
    }
  }

  return fliteredElemets;
}