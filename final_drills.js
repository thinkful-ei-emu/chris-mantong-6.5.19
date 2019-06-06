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

// //Factory Functions with LOTR
// function createCharacter(Name, Nickname, Race, Origin, Weapon, Attack, Defense) {
//   return {
//     Name,
//     Nickname,
//     Race,
//     Origin,
//     Weapon,
//     Attack,
//     Defense,
//     describe: function() {
//       return `${this.Name} is a ${this.Race} from ${this.Origin}.`;
//     },
//     evaluateFight: function(character) {
//       const x = character.Defense > this.Attack ? 0 : this.Attack - character.Defense;
//       const y = this.Defense > character.Attack ? 0 : character.Attack - this.Defense;
      
//       return `Your opponent takes ${x} damage and you receive ${y} damage`;
//     }
//   };
// }
// const Gandalf = createCharacter('Gandalf the White', 'gandalf', 'Wizard', 'Middle Earth', 'wizard staff', 10, 6);
// const Bilbo = createCharacter('Bilbo Baggins', 'bilbo', 'Hobbit', 'The Shire', 'the Ring', 2, 1);
// const Frodo = createCharacter('Frodo Baggins', 'frodo', 'Hobbit', 'The Shire', 'String and Barrow Blade', 3, 2);
// const Aragorn = createCharacter('Aragorn son of Arathorn', 'aragorn', 'Man', 'Dunnedain', 'Anduril', 6, 8);
// const Legolas = createCharacter('Legolas', 'legolas', 'Elf', 'Woodland Realm', 'Bow and Arrow', 8, 5);

// const characters = [Gandalf, Bilbo, Frodo, Aragorn, Legolas];


// //console.log(character);

// const aragorn = characters.find(character => character.Nickname === 'aragorn');

// const hobbitList = characters.filter(character => character.Race === 'Hobbit');

// const strongAtt = characters.filter(character => character.Attack > 5);

// console.log(aragorn, hobbitList, strongAtt);

//A Database Search
const HEROES = [
  { id: 1, name: 'Captain America', squad: 'Avengers' },
  { id: 2, name: 'Iron Man', squad: 'Avengers' },
  { id: 3, name: 'Spiderman', squad: 'Avengers' },
  { id: 4, name: 'Superman', squad: 'Justice League' },
  { id: 5, name: 'Wonder Woman', squad: 'Justice League' },
  { id: 6, name: 'Aquaman', squad: 'Justice League' },
  { id: 7, name: 'Hulk', squad: 'Avengers' },
];

function findOne(arr, query) {
  const result = arr.find(word => {
    if (!word[query]) {
      return null;
    }  
    return word;
  });
  return result;
}

console.log(findOne(HEROES, { id: 1 }));

//A Database Method

const Database = {
  store: {
    heroes: [
      { id: 1, name: 'Captain America', squad: 'Avengers' },
      { id: 2, name: 'Iron Man', squad: 'Avengers' },
      { id: 3, name: 'Spiderman', squad: 'Avengers' },
      { id: 4, name: 'Superman', squad: 'Justice League' },
      { id: 5, name: 'Wonder Woman', squad: 'Justice League' },
      { id: 6, name: 'Aquaman', squad: 'Justice League' },
      { id: 7, name: 'Hulk', squad: 'Avengers' },
    ]
  },
  findOne: 2
};