//# add the element in array if it not exits
//# addDistinct -- another name 
const addUinque = (array, element) => {

  if (!(array.includes(element)))
    array.push(element);

  return array;
}

//# 1. Festival Ribbon Count
const ribbonCount = (ribbons) => ribbons.reduce((count, book) => book === 'Dune' ? count + 1 : count, 0);

//# 2. Stargazing Log
const constellationsList = (logs) => logs.flatMap(x => x).reduce(addUinque, []);

//# 3. Birdwatching Duplicate Removal
const speciesList = (birsdsSeen) => birsdsSeen.reduce(addUinque, []);

//# 4. Classroom Attendance Check
const attendedAtLeastOnce = (hourAttendance) => hourAttendance.flatMap(x => x).reduce(addUinque, []);

//# 5. Candy Jar Stocking
const totalCandies = (storeLog) => storeLog.flatMap(x => x).reduce((total, value) => total + value, 0);

//# 6. Music Rehearsal Notes
const isDoSung = (notes) => notes.flatMap(x => x).some(song => song === 'do');

//# 7. Weather Sensor Validation
const isAllBelow32 = (sheet) => sheet.flatMap(x => x).every(temperature => temperature < 32);

//# 8. Fitness Tracker Miles
const totalMiles = (runnerLogs) => runnerLogs.flatMap(x => x).reduce((total, value) => total + value);

//# 9. Art Workshop Color Variety
const distinctColors = (colorsUsed) => colorsUsed.flatMap(x => x).reduce(addUinque, []);

//# 10. Library Return Counter
const returnedCount = (booksLog) => booksLog.reduce((count, book) => book === 'Dune' ? count + 1 : count, 0);

//# 11. Lunchbox Ingredient Inventory
const distinctIngredients = (ingredients) => ingredients.flatMap(x => x).reduce(addUinque, []);

//# 12. Choir Harmony Review
const isSoSung = (notes) => notes.flatMap(x => x).some(song => song === 'so');


// //# 13. Vegetable Crate Totals
// const vTotals = (runnerLogs) => {
//   return vTotals.flatMap(x => x).reduce((total, value) => total + value;
// }

// //# 14. Post Office Parcel Record
// const distinctIngredients = (ingredients) => {
//   return ingredients.flat().reduce(addUinque, []);
// }

// //# 15. Wildlife Sighting Count
// const returnedCount = (booksLog) => {
//   return booksLog.reduce((count, book) => book === 'deer' ? count + 1 : count, 0);
// };

// //# 16. Study Group Completion
// const distinctIngredients = (ingredients) => {
//   return ingredients.flat().reduce(addUinque, []);
// }

// //# 17. Dance Class Steps
// const isSoSung = (notes) => {
//   return notes.flat().some(song => song === 'so');
// }

// //# 18. Garden Watering Amount
// const vTotals = (runnerLogs) => {
//   return vTotals.flat().reduce((total, value) => total + value;
// }

// //# 19. Paper Crane Making
// const vTotals = (runnerLogs) => {
//   return vTotals.flat().reduce((total, value) => total + value;
// }

// //# 20. Fruit Basket Inventory
// const distinctIngredients = (ingredients) => {
//   return ingredients.flat().reduce(addUinque, []);
// }

// //# 21. Classroom Pen Distribution
// const vTotals = (runnerLogs) => {
//   return vTotals.flat().reduce((total, value) => total + value;
// }

// //# 20. Fruit Basket Inventory
// const distinctIngredients = (ingredients) => {
//   return ingredients.flat().reduce(addUinque, []);
// }

//# result function to print the result
const result = (title, data, task) => {
  const result = task(data);
  console.log(title, result);
}

const main = () => {
  result("1. FestivalRibbonCount :", ["red", "blue", "green", "red"], ribbonCount);
  result("2. Stargazing Log :", [["Orion", "Leo"], ["Taurus"], ["Orion", "Gemini"]], constellationsList);
  result("3. Birdwatching :", ["sparrow", "crow", "sparrow", "eagle", "crow"], speciesList);
  result("4. Classroom Attendance Check :", [["Asha", "Ravi", "Neel"], ["Ravi"], ["Asha", "Meera"]], attendedAtLeastOnce);
  result("5. Candy Jar Stocking :", [[5, 3], [2], [4, 1]], totalCandies);
  result("6. Music Rehearsal Notes :", [["mi", "fa", "so"], ["do", "mi"], ["fa"]], isDoSung);
  result("7. Weather Sensor Validation :", [[22, 23], [25, 24, 22], [29]], isAllBelow32);
  result("8. Fitness Tracker Miles :", [[2, 3, 2], [4], [1, 1, 10]], totalMiles);
  result("9. Art Workshop Color Variety", [["blue", "yellow"], ["yellow", "green"], ["blue", "red"]], distinctColors);
  result("10. Library Return Counter :", ["Dune", "Dune", "Foundation", "Dune", "Dune"], returnedCount);
  result("11. Lunchbox Ingredient Inventory :", [["rice", "lentils"], ["rice"], ["curd", "lentils"]], distinctIngredients);
}

main();