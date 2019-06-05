'use strict';

// //Object initializers and methods
// let loaf = {
//   flour: 300,
//   water: 210,
//   hydration: function() {return this.water / this.flour * 100;}
// };
// console.log(`${loaf.flour} and ${loaf.water}`);
// console.log(loaf.hydration());

// //Iterating over an object's properties
// const obj={
//   foo:1,
//   bar:2,
//   fum:3,
//   quux:4,
//   spam:5
// };
// let text='';
// let x;
// for (x in obj) {
//   text += x + ' ' + obj[x] + ' ';
// }
// console.log(text);

// //Arrays in objects
// const hobbitMeal = {
//   meals: ['breakfast', 'second breakfast', 'elevenses', 'lunch', 'afternoon tea', 'dinner', 'supper']
// };

// console.log(hobbitMeal.meals[3])

// //Arrays in objects part II

// const arr=[
//   {name:'Mantong', 
//     jobTitle:'Engineer',
//     boss: 'John'
//   },
//   {
//     name:'chris',
//     jobTitle: 'Software Engineer',
//     boss: 'Steve'
//   },
//   {
//     name:'Joey',
//     jobTitle: 'Baby',
//   }
// ];
// let results=[];
// for (let i=0; i< arr.length; i++){
//   results.push(arr[i].name,arr[i].jobTitle);}
// console.log(results);

// function myBoss(obj) {
//   for(let i=0; i<obj.length;i++){
//     if(obj[i].boss) {
//       console.log(`${obj[i].jobTitle} ${obj[i].name} reports to ${obj[i].boss}.`);
//     }
//     else {
//       console.log(`${obj[i].jobTitle} ${obj[i].name} doesn't report to anybody.`);
//     }
//   }
// }
// myBoss(arr);

// //Cracking the code

// const decodearr={
//   a:2,
//   b:3,
//   c:4,
//   d:5,
// };

// function decodeWord(word){
//   let result = decodearr[word[0]];
//   if(result === undefined) {
//     return ' ';
//   }
//   return word[result-1];
// }

// function decodeWords(word){
//   {
//     return word
//       .split(' ')
//       .map(word => decodeWord(word))
//       .join('');
   
//   }

// }

// let words='craft block argon meter bells brown croon droop'; 
// let results=decodeWords(words);
// console.log(results);

//Factory Functions with LOTR
function createCharacter() {
  return {
    Name,
    Nickname,
    Race,
    Origin,
    Attack,
    Defense,
    describe: function() {
      return `${this.name} is a ${this.race} from ${this.origin}.`;
    },
    evaluateFight: function(character) {
      if((this.attack-this.defense)<0) {
        return x=0;
      }
      return `Your opponent takes ${this.attack-this.defense} damage and you receive ${this.attack-this.defense} damage`;
    }
  };

}