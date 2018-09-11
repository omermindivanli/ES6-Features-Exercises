// original
var arr = [
  { key: '11', value: '1100', $$hashKey: '00X' },
  { key: '22', value: '2200', $$hashKey: '018' },
];

// My solution
var obj = {};
for (let i = 0; i < arr.length; i++) {
  obj[arr[i].key] = arr[i].value;
}

// Best Solution
let newObj = Object.assign(
  {},
  ...arr.map(item => ({ [item.key]: item.value })),
);

// Best Solution ES6
const nytObj = (arr, key) =>
  Object.assign({}, ...arr.map(item => ({ [item[key]]: value })));

if (obj === nytObj) {
  console.log(newObj);
} else {
  console.log('Shit');
}
