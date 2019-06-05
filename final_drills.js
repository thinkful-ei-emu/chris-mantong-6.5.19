'use strict';

// //Object initializers and methods
// let loaf = {
//   flour: 300,
//   water: 210,
//   hydration: function() {return this.water / this.flour * 100;}
// };
// console.log(`${loaf.flour} and ${loaf.water}`);
// console.log(loaf.hydration());

//Iterating over an object's properties
const obj={
  foo:1,
  bar:2,
  fum:3,
  quux:4,
  spam:5
};
let text='';
let x;
for (x in obj) {
  text += x + ' ' + obj[x] + ' ';
}
console.log(text);