// add the element in array if it not exits
// addDistinct -- another name 
const addUinque = (array, element) => {

  const elements = array.map(x => x);

  if (!(elements.includes(element))) {
    elements.push(element);
  }

  return elements;
}

//# ifEqual to do somthing
const ifEqual = (info, value) => {
  const count = info[0];
  const matchValue = info[1];

  if (value === matchValue) {
    info[0] = count + 1;
  }

  return info;
}

//# 1. Festival Ribbon Count
const ribbonCount = (ribbons) => {
  const blueRibbonsCount = (ribbons.reduce(ifEqual, [0, "blue"])[0]);
  return blueRibbonsCount;
};

//# 2. Stargazing Log
const constellationsList = (logs) => {
  const list = logs.flat().reduce(addUinque, [])
  return list;
}

//# 3. Birdwatching Duplicate Removal
const speciesList = (birsdsSeen) => {
  const list = birsdsSeen.reduce(addUinque, []);
  return list;
}

// 4. Classroom Attendance Check
const attendedAtLeastOnce = (hourAttendance) => {
  const list = hourAttendance.flat().reduce(addUinque, []);
  return list;
}

// 5. Candy Jar Stocking
const totalCandies = (storeLog) => {
  const total = storeLog.flat().reduce((total, value) => total + value, 0);
  return total;
}

//6. Music Rehearsal Notes
const isDoSung = (notes) => {
  const isSung = notes.flat().some(song => song === 'do');
  return isSung;
}

// 7. Weather Sensor Validation
const isAllBelow32 = (sheet) => {
  const isbelow = sheet.flat().every(temperature => temperature < 32);
  return isbelow;
}

// 8. Fitness Tracker Miles
const totalMiles = (runnerLogs) => {
  const total = runnerLogs.flat().reduce((total, value) => total + value, 0);
  return total;
}

// 9. Art Workshop Color Variety
const distinctColors = (colorsUsed) => {
  const list = colorsUsed.flat().reduce(addUinque, []);
  return list;
}

// 10. Library Return Counter
const returnedCount = (booksLog) => {
  const count = (booksLog.reduce(ifEqual, [0, "Dune"]))[0];
  return count;
}

// result function to print the result
const result = (title, data, task) => {
  const result = task(data);
  console.log(title, result);
}

const main = () => {
  result("1. FestivalRibbonCount :", ["red", "blue", "green", "red"], ribbonCount);
  result("2. Stargazing Log :", [["Orion", "Leo"], ["Taurus"], ["Orion", "Gemini"]], constellationsList);
  result("3. Birdwatching :", ["sparrow", "crow", "sparrow", "eagle", "crow"], speciesList);
  result("4. Classroom Attendance Check", [["Asha", "Ravi", "Neel"], ["Ravi"], ["Asha", "Meera"]], attendedAtLeastOnce);
  result("5. Candy Jar Stocking", [[5, 3], [2], [4, 1]], totalCandies);
  result("6. Music Rehearsal Notes", [["mi", "fa", "so"], ["do", "mi"], ["fa"]], isDoSung);
  result("7. Weather Sensor Validation", [[22, 23], [25, 24, 22], [29]], isAllBelow32);
  result("8. Fitness Tracker Miles", [[2, 3, 2], [4], [1, 1, 10]], totalMiles);
  result("9. Art Workshop Color Variety", [["blue", "yellow"], ["yellow", "green"], ["blue", "red"]], distinctColors);
  result("10. Library Return Counter", ["Dune", "Dune", "Foundation", "Dune", "Dune"], returnedCount)
}

main();