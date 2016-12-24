const dogs = [
  { name: 'Snickers', age: 2 },
  { name: 'hugo', age: 8 }
];

// Regular
console.log('Hi from ' + dogs[0].name);

// Table
console.table(dogs);

// Interpolated
console.log('Hi from %s', dogs[0].name);

// Styled
console.log('%c Hi from %s', 'font-size: 30px', dogs[0].name);

// warning!
console.warn('%c Hi from %s', 'font-size: 30px', dogs[0].name);

// Error :|
console.error('%c Hi from %s', 'font-size: 30px', dogs[0].name);

// Info
console.info('%c Hi from %s', 'font-size: 30px', dogs[0].name);

// Testing
console.assert(1 == 2, 'one does not equal two');

// Viewing DOM Elements
console.dir(document.querySelector('p'));

// Grouping together
console.groupCollapsed('Numbers');
console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.groupEnd('Numbers');

// counting
console.count('one');
console.count('one');
console.count('one');
console.count('one');

// timing
console.time('timeout');
setTimeout(() => console.timeEnd('timeout'), 1000);
