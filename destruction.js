// Destruction for Object
// ES5
let props = {
  prop1: "value1",
  prop2: "value2",
  prop3: "value3",
  prop4: "value4"
};

let prop1 = props.prop1;
let prop2 = props.prop2;

console.log(prop1);
console.log(prop2);

// ES6
let { prop3, prop4 } = props;
console.log(prop3);
console.log(prop4);

// Destruction for Array ES6
const arr = [1, 2, 3];
const [val1, val2, val3] = arr;

console.log(arr);

// https://javascript.info/
