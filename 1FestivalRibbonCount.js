const ribbons = ["red", "blue", "red", "green", "red", "blue"];

const isBlue = function (color) {
  return color === 'blue';
}

// Way - 1  ❌

// Why to not use 
// Generating new array by using filter function
{

  const blueRibbonsCount = function (ribbons) {
    const blueRibbons = ribbons.filter(isBlue);
    return blueRibbons.length;
  }

}

//Way - 2 
{

  const ribbons = ["red", "blue", "red", "green", "red", "blue"];

  const ifBlue = function (color, count) {
    return color === 'blue' ? count + 1 : count;
  }

  const blueRibbonsCount = function (ribbons) {
    const count = ribbons.reduce(ifBlue, 0);
    return count;
  }

  blueRibbonsCount(ribbons);

}