// To String

// 1)
console.log(typeof(String(null)));
console.log(typeof(String(4)));

// 2)
console.log(typeof(5 + ''));

const log = 14;
console.log('https://claude.com/catalog/' + log);

const fSize = 42 + 'px';
console.log(typeof(fSize));

// To Number

// 1)
console.log(typeof(Number('4')));

// 2)
console.log(typeof(+'5'));

// 3)
console.log(typeof(parseInt('15px', 16)));

let answer = +prompt('Hello');

// To boolean

// 0, '', null, undefined, NaN;

// 1) 
let switcher = null;

if (switcher) {
    console.log('Working...');
}

switcher = 1;

if (switcher) {
    console.log('Working...');
}

// 2)
console.log(typeof(Boolean('4')));

// 3)
console.log(typeof(!!'wha'));