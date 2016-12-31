// start with strings, numbers and booleans
let age = 100;
let ageCopy = age;
console.log('before age', age, ageCopy);
age = 200;
console.log('after age', age, ageCopy);

let name = 'Tim';
let nameCopy = name;
console.log('before name', name, nameCopy);
name = 'Cook';
console.log('after name', name, nameCopy);

// Let's say we have an array
const players = ['Wes', 'Sarah', 'Ryan', 'Poppy'];

// and we want to make a copy of it.
const playersCopy = players;
console.log('before array change', players, playersCopy);

// You might think we can just do something like this:
playersCopy[3] = 'Reference';
console.log('after array change', players, playersCopy);

// However what happens when we update that array?
// Now here is the problem!
// Oh no - we have edited the original array too!
// Why? It's because that is an array reference, not an array copy.
// They both point to the same array!
// So, how do we fix this? We take a copy instead!
const playersSliced = players.slice();
playersSliced[3] = 'Sliced';
console.log('sliced and changed', players, playersSliced);

// or create a new array and concat the old one in
const playersConcat = [].concat(players);
playersConcat[3] = 'Concat';
console.log('concat and changed', players, playersConcat);

// or use the new ES6 Spread
const playersSpread = [...players];
playersSpread[3] = 'Spread';
console.log('spread and changed', players, playersSpread);

// The same thing goes for objects, let's say we have a person object
const person = {
  name: 'Tim Cook',
  age: 33
};

// and think we make a copy:
const personReference = person;
console.log('object ref before change', person, personReference);
personReference.age = 35;
console.log('object ref after change', person, personReference);

// how do we take a copy instead?
const personCopy = Object.assign({}, person);
console.log('object copy before change', person, personCopy);
personCopy.age = 55;
console.log('object copy after change', person, personCopy);

// We will hopefully soon see the object spread - {...person}

// Things to note - this is only 1 level deep - both for Arrays and Objects.
// lodash has a cloneDeep method, but you should think twice before using it.
const nested = {
  name: 'Tim',
  age: 25,
  dad: {
    name: 'John',
    age: 55
  }
};

const nestedCopy = Object.assign({}, nested);
console.log('before nested copy change', nested.dad, nestedCopy.dad);
nestedCopy.dad.age = 77;
console.log('after nested copy change', nested.dad, nestedCopy.dad);
