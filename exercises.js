/* Array Methods and High Order Functions are
quite important aspects of ES6 Syntax */

// Objects Inside Array
const companies = [
  {
    name: 'Company One',
    category: 'Finance',
    start: 1981,
    end: 2004,
  },
  { name: 'Company Two', category: 'Retail', start: 1992, end: 2008 },
  { name: 'Company Three', category: 'Auto', start: 1999, end: 2007 },
  {
    name: 'Company Four',
    category: 'Retail',
    start: 1989,
    end: 2010,
  },
  {
    name: 'Company Five',
    category: 'Technology',
    start: 2009,
    end: 2014,
  },
  {
    name: 'Company Six',
    category: 'Finance',
    start: 1987,
    end: 2010,
  },
  { name: 'Company Seven', category: 'Auto', start: 1986, end: 1996 },
  {
    name: 'Company Eight',
    category: 'Technology',
    start: 2011,
    end: 2016,
  },
  {
    name: 'Company Nine',
    category: 'Retail',
    start: 1981,
    end: 1989,
  },
];

// Array
const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

// ES5 forEach
// let test = () => {
//   for (let i = 0; i < companies.length; i++) {
//     console.log(companies[i]);
//   }
// };
// test();

//ES6 forEach
// companies.forEach(function(company) {
//   console.log(company.name);
// });

//ES5 Filter
// let canDrink = [];
// for (let x = 0; x < ages.length; x++) {
//   if (ages[x] > 20) {
//     canDrink.push(ages[x]);
//   }
// }
// console.log(canDrink);

// console.log(ages);

//ES6 Filter
// const canDrink = ages.filter(function(age) {
//   if (age >= 18) {
//     return true;
//   }
// });

// const cannotDrink = ages.filter(function(age) {
//   if (age <= 17) {
//     return true;
//   }
// });

// console.log(canDrink);
// console.log(cannotDrink);

//ES6 Bonus Filter Example

// const retailCompanies = companies.filter(function(company) {
//   if (company.category === 'Retail') {
//     return true;
//   }
// });

// console.log(retailCompanies);

//ES6 Bonus Filter Example 2
// You can reach some object keys via arr.filter method
// const endDate = companies.filter(function(bankrupt) {
//   if (bankrupt.end <= 2000) {
//     return true;
//   }
// });

// console.log(endDate);
// console.log(`${endDate}`);

// ES6 Bonus Filter Example 2 UPDATED
// const endDate = companies.filter(company => company.name === 'Company Two');
// console.log(endDate);

// get companies on 80's

// const eighties = companies.filter(
//   company =>
//     company.start >= 1980 &&
//     company.end <= 1990 &&
//     company.category === 'Retail',
// );
// console.log(eighties);

// const obj = {
//   id: { name: 'Omer', age: '24', nationality: 'Turkish' },
// };

// obj.class = { middle: 'Contraversional', sex: 'Male' };

// console.log(obj);

// obj.DisplayId = function() {
//   console.log(this.id.name);
// };

// obj.DisplayId();

// const companyNames = companies.map(company => company.name);

// const companyNames = companies.map(company => company.name);

// console.log(companyNames);

companies.push({ name: 'Company Ten', category: 'Retail' });

console.log(companies);


