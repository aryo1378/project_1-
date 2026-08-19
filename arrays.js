const str = prompt('');
const products = str.split(', ');
products.sort();
console.log(products.join('; '));

const array = [123, 21, 31241, 42, 5];

array.sort(compareNum);
console.log(array);

function compareNum(a, b) {
    return a - b;
}