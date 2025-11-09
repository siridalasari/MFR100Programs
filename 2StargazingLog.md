# 2. Stargazing Log
#### A stargazing club logs visible constellations from each night:

```
["Orion", "Leo"]
["Taurus"]
["Orion", "Gemini"]
```


#### Combine everyone’s observations into one list of all constellations spotted. 


const ifIncludes = function (array, element, b, c) {
  console.log(array, element, b, c)
  const elements = array;
  return !(element.includes(elements));
}

const constellationsList = function (array) {
  const elements = array.flat();
  console.log(elements)
  const list = elements.filter(ifIncludes, []);
  return list;
}

console.log(constellationsList(logs));