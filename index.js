'use strict';
// ES6 NOTES
// 1. Data Types in JS 
// Null means nothing but it is an obj in JS. 
// Objects, arrays and null == objects as data type!
document.write("<em>" + 'Data types in JS ES6' + "</em>" + '<br />');

const g = undefined;
document.write(typeof g + '<br />');

const h = '12312';
document.write(' "12312" = ' +typeof h + '<br />');

const j = 22;
document.write("22 = " + typeof j + '<br />');

const k = true;
document.write( k + " = " + typeof k + '<br />');

const l = [1, 2, 3];
document.write( "[1, 2, 3] = " + typeof l + '<br />');

const i = {ömer: 'handsome'};
document.write("{ömer: 'handsome'} = " +typeof i + '<br />');

const f = null;
document.write("null = "+ typeof f + '<br />');

document.write('<hr />');

var flower = 30;
if(true){
    let flower = 36;
    document.write('let flower = '+ flower + '<br />');
}
document.write('var flower = '+ flower + '<br />');

document.write('<hr />');

document.write('<hr />');

const func = function(){
    console.log("I think My data type is Func!")
};
console.log(func);

document.write('<hr />');

// -1. Prop: length or typeof
var element = 'Obj';
console.log(element.length); // 3
console.log(typeof element);

document.write('<hr />');

// 0. To add and remove a value to array's end
const array = [1];
array.push('asd');
array.pop();

document.write('<hr />');

// 1. Const should'not be changed with a new value!
const a = 4;
// a = 4;
console.log(a); // 4

document.write('<hr />');

// 2. It does not mean the following...
const arr = [1, 2, 3];
arr.push(4);
console.log(arr); // [1, 2, 3, 4]

document.write('<hr />');

// 3. The same rule for Objects
const obj = {key1: 'ömer', key2 : 'ali'};
obj.key3 = 'cem';

document.write('<hr />');

/* 4. Operators 
    Relational <, >, <=, >=, != and ==
    Arithmetic +, -, *, /, %, ++, --
    Logical && (and), || (or), | (not)  
    Assignment
    Bitwise
    Miscellaneous
*/

document.write('<hr />');


let x, y, z = (2, 3, 4);
let object =  {x: 1, y: 2, z: 3}
console.log(object);

console.log("Obj " + (object.x+object.y+object.z));

// If, else if and else statements
if (x < y < z){
    console.log("x, y, z relatively!");
} else if (z < y < x){
    console.log("z < y < x!");
};

if(z!=y){
    console.log('z != y not equal');
} else if (z == y){
    console.log("Equal!");    
};

document.write('<hr />');








