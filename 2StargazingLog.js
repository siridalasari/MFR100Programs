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
const ifEqual = (count, value, index, array, matchValue = 'blue') => {
  return value === matchValue ? count + 1 : count;
}

//# 1. Festival Ribbon Count
const ribbons = ["red", "blue", "red", "green", "red"];
const blueRibbonsCount = ribbons.reduce(ifEqual, 0);
console.log("1. Festival Ribbon Count: ", blueRibbonsCount)

//# 2. Stargazing Log
const logs = [["Orion", "Leo"], ["Taurus"], ["Orion", "Gemini"]];
const constellationsList = logs.flat().reduce(addUinque, []);

console.log("2. Stargazing Log", constellationsList);

//# 3. Birdwatching Duplicate Removal
const birsdsSeen = ["sparrow", "crow", "sparrow", "eagle", "crow"];
const speciesList = birsdsSeen.reduce(addUinque, []);

console.log("3. Birdwatching Duplicate Removal", speciesList);

// 4. Classroom Attendance Check
const hourAttendance = [["Asha", "Ravi", "Neel"], ["Ravi"], ["Asha", "Meera"]];
const distinctList = hourAttendance.flat().reduce(addUinque, []);

console.log("4. Classroom Attendance Check", distinctList);

// 5. Candy Jar Stocking
const storeLog = [[5, 3], [2], [4, 1]];
const totalCandies = storeLog.flat().reduce((total, value) => total + value, 0);

console.log("5. Candy Jar Stocking", totalCandies);

//6. Music Rehearsal Notes
const notes = [["mi", "fa", "so"], ["do", "mi"], ["fa"]];
const isDoSung = notes.flat().some(song => song === 'do');

console.log("6. Music Rehearsal Notes", isDoSung);

// 7. Weather Sensor Validation
// Several temperature sheets:

// [22, 23]
// [25, 24, 22]
// [29]
// Check if every recorded temperature is below 32.

const sheet = [[22, 23], [25, 24, 22], [29]]
const allBelow32 = sheet.flat().every(temperature => temperature < 32);

console.log("7. Weather Sensor Validation", allBelow32);  

// 8. Fitness Tracker Miles
// Runner logs:

// [2, 3, 2]
// [4]
// [1, 1]
// Find the total miles run.

const runnerLogs = [[2, 3, 2], [4], [1, 1, 10]];
const totalMiles = runnerLogs.flat().reduce((total, value) => total + value, 0);

console.log("8. Fitness Tracker Miles", totalMiles);

// 9. Art Workshop Color Variety
// Paint colors used in sessions:

// ["blue", "yellow"]
// ["yellow", "green"]
// ["blue"]
// Find unique colors used.

// const usedColor = [["blue", "yellow"], ["yellow", "green"], ["blue"]];
// const distinctList = hourAttendance.flat().reduce(addUinque, []);

// console.log("4. Classroom Attendance Check", distinctList);
