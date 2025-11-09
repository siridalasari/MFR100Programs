// map function

const map = function (array, mapper) {
  const mappedList = [];

  for (let index = 0; index < array.length; index++) {
    mappedList.push(mapped(array[index]));
  }

  return mappedList;
}

