//Mutate and return the taskData array to move all the data between 'start' and 'end' inclusive to after 'target'. Ensure the function can handle and length of data between 'start' and 'end', and that it will work when 'target' is anywhere in the array, and ensure it would work regardless of the type of data (except the string "start/end/target". NOTE - Must return taskData and not new array).
const moveData = (array) => {
  const startIndex = array.indexOf("start");
  const endIndex = array.indexOf("end");
  const data = array.splice(startIndex, endIndex - startIndex + 1);
  const targetIndex = array.indexOf("target");
  array.splice(targetIndex + 1, 0, ...data);
  return array;
};

const taskData = [
  1,
  1,
  true,
  false,
  "mistake",
  "start",
  0,
  0,
  0,
  0,
  "end",
  1,
  "target",
];
//console.log(moveData(taskData));

//Converty camelCase to string notation hyphen-case. Loop over data property keys and convert themt to a style string as you would expect on an inline style tag. The expected result is the following string:
// "font-weight:300, font-size:14px, font-family:Arial, fill-opacity:0.5, grid-column-start: content-start"
const camelCaseToHyphenCase = (obj) => {
  let hyphenCase = "";
  for (let key in obj) {
    let oldKey = key;
    const a = key.match(/[A-W]/g);
    for (let i in a) {
      let newKey = key.replace(a[i], `-${a[i].toLowerCase()}`);
      key = newKey;
    }
    hyphenCase += `${key}:${obj[oldKey]};\n`;
  }
  return hyphenCase;
};

const data = {
  fontWeight: 300,
  fontSize: "14px",
  fontFamily: "Arial",
  fillOpacity: 0.5,
  gridColumnStart: "content-start",
};

console.log(camelCaseToHyphenCase(data));
