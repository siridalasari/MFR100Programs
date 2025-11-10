//# add the element in array if it not exits
//# addDistinct -- another name 
const addUinque = (array, element) => {

  if (!(array.includes(element)))
    array.push(element);

  return array;
}

//# occuranceCount 
const occurance = (array, value) => array.reduce((count, book) => book === value ? count + 1 : count, 0);

//# distrinctList
const distrinctList = (array) => array.flatMap(x => x).reduce(addUinque, []);

//# addAllElements 
const sumOf = (array) => array.flatMap(x => x).reduce((total, value) => total + value);

//# includes
const some = (array, checkElement) => array.flatMap(x => x).includes(checkElement);

//# every 
const every = (array, predicate) => array.flatMap(x => x).every(predicate);

//# result function to print the result
const result = (catogery, title, data, checkValue) => {
  const output = catogery(data, checkValue);
  console.log(title, output);
}



const main = () => {
  result(occurance, "1. FestivalRibbonCount :", ["red", "blue", "blue", "green", "red"], 'blue');
  result(distrinctList, "2. Stargazing Log :", [["Orion", "Leo"], ["Taurus"], ["Orion", "Gemini", "siri"]]);
  result(distrinctList, "3. Birdwatching :", ["sparrow", "crow", "sparrow", "eagle", "crow"]);
  result(distrinctList, "4. Classroom Attendance Check :", [["Asha", "Ravi", "Neel"], ["Ravi"], ["Asha", "Meera"]]);
  result(sumOf, "5. Candy Jar Stocking :", [[5, 3], [2], [4, 1]]);
  result(some, "6. Music Rehearsal Notes :", [["mi", "fa", "so"], ["do", "mi"], ["fa"]], 'do');
  result(every, "7. Weather Sensor Validation :", [[22, 90], [25, 24, 22], [29]], (x) => x < 32);
  result(sumOf, "8. Fitness Tracker Miles :", [[2, 3, 2], [4], [1, 1, 10]]);
  result(distrinctList, "9. Art Workshop Color Variety", [["blue", "yellow"], ["yellow", "green"], ["blue", "red"]]);
  result(occurance, "10. Library Return Counter :", ["Dune", "Dune", "Foundation", "Dune", "Dune"], "dune");
  result(distrinctList, "11. Lunchbox Ingredient Inventory :", ["rice", "lentils"], ["rice"], ["curd", "lentils"]);
  result(some, "12. Choir Harmony Review", ["la", "la"], ["mi"], ["so", "la"], 'so');
  result(sumOf, "14. Post Office Parcel Record", [[4, 6], [5], [4, 1]]);
  result(occurance, "15. Wildlife Sighting Count", ["deer", "deer", "rabbit", "deer"], 'deer');
  result(distrinctList, "16. Study Group Completion", [[1, 2], [3], [2, 4, 1]]);
  result(some, "17. Dance Class Steps", [["step", "tap"], ["turn", "step"]], 'turn');
  result(sumOf, "18. Garden Watering Amount", [[5, 3], [2], [4, 1]]);
  result(sumOf, "19. Paper Crane Making", [[5, 3], [2], [4, 1]]);
  result(distrinctList, "20. Fruit Basket Inventory", [["apple", "banana"], ["apple"], ["apple", "orange"]]);
  result(sumOf, "21. Classroom Pen Distribution", [[5, 3], [2], [4, 1]]);
  result(distrinctList, "22. Movie Marathon Titles", [["Inception", "Dunkirk"], ["Interstellar"], ["Inception"]]);
  result(distrinctList, "23. Name Badge Sorting", ["A", "B", "A", "C"]);
  result(occurance, "24. Ice Cream Orders", [["vanilla", "chocolate"], ["strawberry"], ["chocolate"]], 'chocolate');
  result(distrinctList, "25. Flowers in Bouquets", [["rose", "lily"], ["lily", "tulip"]]);
  result(sumOf, "26. Morning Exercise Count", [[5, 3], [2], [4, 1]]);
  result(distrinctList, "27. Train Station Announcements", ["A", "B", "A", "C"]);
  result(sumOf, "28. Book Club Pages Read", [[5, 3], [2], [4, 1]]);
  result(every, "29. Rainfall Data Check", [[22, 90], [25, 24, 22], [29]], (x) => x > 0);
  result(sumOf, "30. Fruit Stand Weight Totals", [[5, 3], [2], [4, 1]]);
  result(distrinctList, "31. School Snack List", [["idli", "vada"], ["vada", "upma"]]);
  result(distrinctList, "32. Photo Contest Entries", [["sunset", "bird"], ["river"], ["sunset"]]);
  result(every, "33. Electricity Reading Validation", [[22, 900], [25, 24, 22], [29]], (x) => x < 120);
  result(sumOf, "34. Jogging Lap Count", [[5, 3], [2], [4, 1]]);
  result(occurance, "35. Music Playlist Repeats", [["vanilla", "chocolate"], ["strawberry"], ["chocolate"]], 'chocolate');
  result(distrinctList, "36. Café Order Ingredients", [["sunset", "bird"], ["river"], ["sunset"]]);
  result(distrinctList, "37. Student Poetry Words", [["sunset", "bird"], ["river"], ["sunset"]]);
  result(distrinctList, "38. Photo Contest Entries", [["sunset", "bird"], ["river"], ["sunset"]]);
  result(sumOf, "38. Gift Box Items", [[5, 3], [2], [4, 1]]);
  result(some, "39. Gym Routine Count", ["la", "la"], ["mi"], ["so", "la"], 'so');
  result(sumOf, "40. Fish Tank Measurements", [[5, 3], [2], [4, 1]]);
  result(distrinctList, "41. Candy Distribution", [["sunset", "bird"], ["river"], ["sunset"]]);
  result(distrinctList, "42. Workshop Attendance", [["sunset", "bird"], ["river"], ["sunset"]]);
  result(sumOf, "43. Space Camp Star Names", [[5, 3], [2], [4, 1]]);
  result(sumOf, "44. Train Car Passenger Check", [[5, 3], [2], [4, 1]]);
  result(distrinctList, "45. Weekly Grocery Tally", [["sunset", "bird"], ["river"], ["sunset"]]);
  result(distrinctList, "46. Tea Tasting Flavors", [["sunset", "bird"], ["river"], ["sunset"]]);
  result(some, "47. Photography Exposure Values", ["la", "la"], ["mi"], ["so", "la"], 'so');
  result(distrinctList, "48. Drawing Class Tools", [["sunset", "bird"], ["river"], ["sunset"]]);
  result(sumOf, "49.  Coin Collection Tally", [[5, 3], [2], [4, 1]]);
  result(distrinctList, "50. Cooking Class Spices", [["sunset", "bird"], ["river"], ["sunset"]]);
  result(occurance, "24. Ice Cream Orders", [["vanilla", "chocolate"], ["strawberry"], ["chocolate"]], 'chocolate');
  //52 flatmap
  result(some, "53. Choir Harmony Review", ["la", "la"], ["mi"], ["so", "la"], 'so');
  result(every, "54. Electricity Reading Validation", [[22, 900], [25, 24, 22], [29]], (x) => x < 120);
  result(distrinctList, "55. Photo Contest Entries", [["sunset", "bird"], ["river"], ["sunset"]]);
  result(sumOf, "56. Jogging Lap Count", [[5, 3], [2], [4, 1]]);
  result(distrinctList, "57. Photo Contest Entries", [["sunset", "bird"], ["river"], ["sunset"]]);
  result(occurance, "58. Ice Cream Orders", [["vanilla", "chocolate"], ["strawberry"], ["chocolate"]], 'chocolate');
  result(sumOf, "59. Jogging Lap Count", [[5, 3], [2], [4, 1]]);
  result(distrinctList, "60. Photo Contest Entries", [["sunset", "bird"], ["river"], ["sunset"]]);
  result(some, "61. Choir Harmony Review", ["la", "la"], ["mi"], ["so", "la"], 'so');
  result(every, "62. Electricity Reading Validation", [[22, 900], [25, 24, 22], [29]], (x) => x < 120);
  //63 no dup
  //64 rev
  //65 frequency summ
  result(occurance, "66. Ice Cream Orders", [["vanilla", "chocolate"], ["strawberry"], ["chocolate"]], 'chocolate');
  result(sumOf, "67. Jogging Lap Count", [[5, 3], [2], [4, 1]]);
  result(distrinctList, "68. Photo Contest Entries", [["sunset", "bird"], ["river"], ["sunset"]]);
  //69 s sum
  //70 uniq
  result(some, "71. Choir Harmony Review", ["la", "la"], ["mi"], ["so", "la"], 'so');
  //72 
  result(distrinctList, "73. Photo Contest Entries", [["sunset", "bird"], ["river"], ["sunset"]]);
  result(sumOf, "74. Jogging Lap Count", [[5, 3], [2], [4, 1]]);
  result(distrinctList, "75. Photo Contest Entries", [["sunset", "bird"], ["river"], ["sunset"]]);
  result(occurance, "76. Ice Cream Orders", [["vanilla", "chocolate"], ["strawberry"], ["chocolate"]], 'chocolate');
  //77 uni
  result(some, "78. Choir Harmony Review", ["la", "la"], ["mi"], ["so", "la"], 'so');
  result(every, "79. Electricity Reading Validation", [[22, 900], [25, 24, 22], [29]], (x) => x < 120);
  //80 f s
  //81 reverse
  //82 count
  //83 > 0
  result(distrinctList, "84. Photo Contest Entries", [["sunset", "bird"], ["river"], ["sunset"]]);
  result(sumOf, "85. Jogging Lap Count", [[5, 3], [2], [4, 1]]);
  result(some, "86. Choir Harmony Review", ["la", "la"], ["mi"], ["so", "la"], 'so');
  result(every, "87. Electricity Reading Validation", [[22, 900], [25, 24, 22], [29]], (x) => x < 120);
  result(distrinctList, "88. Photo Contest Entries", [["sunset", "bird"], ["river"], ["sunset"]]);
  result(sumOf, "89. Jogging Lap Count", [[5, 3], [2], [4, 1]]);
  result(distrinctList, "90. Photo Contest Entries", [["sunset", "bird"], ["river"], ["sunset"]]);
  result(occurance, "91. Ice Cream Orders", [["vanilla", "chocolate"], ["strawberry"], ["chocolate"]], 'chocolate');
  //92 flatmap
  result(some, "93. Choir Harmony Review", ["la", "la"], ["mi"], ["so", "la"], 'so');
  result(every, "94. Electricity Reading Validation", [[22, 900], [25, 24, 22], [29]], (x) => x < 120);
  //95 reverse
  //96 frequence
  result(occurance, "97. Ice Cream Orders", [["vanilla", "chocolate"], ["strawberry"], ["chocolate"]], 'chocolate');
  //98 uni
  //99
  result(distrinctList, "32. Photo Contest Entries", [["sunset", "bird"], ["river"], ["sunset"]]);

}

main();

//   result(some, "12. Choir Harmony Review", ["la", "la"], ["mi"], ["so", "la"], 'so');
//   result(occurance, "24. Ice Cream Orders", [["vanilla", "chocolate"], ["strawberry"], ["chocolate"]], 'chocolate');
//   result(distrinctList, "32. Photo Contest Entries", [["sunset", "bird"], ["river"], ["sunset"]]);
//   result(every, "33. Electricity Reading Validation", [[22, 900], [25, 24, 22], [29]], (x) => x < 120);
//   result(sumOf, "34. Jogging Lap Count", [[5, 3], [2], [4, 1]]);

//   ["mi", "fa", "so", "mi", "fa"]-- distrinctList 
//                                 -- occurance 

//   [["mi" , 2], [fa : 2], [so : 1]]

//   ["mi", "fa", "so", "mi", "fa"].distrinctList()
//   ["mi", "fa", "so"]
//   [[mi  2], [fa : 2], [so : 1]]


//   ReadableStreamDefaultController


//   const addUinque = (array, element) => {

//   if (!(array.includes(element)))
//     occurance(originalArray);

//   return array;
// }
