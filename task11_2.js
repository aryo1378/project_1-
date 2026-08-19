const someString = 'This is some strange string';

function reverse(str) {
    if (typeof str !== 'string') {
        return 'Ошибка!';
    } else {
        const reverseString = [];
        for (let i = str.length - 1; i >= 0; i--) {
            reverseString.push(str[i]);
        }
        return reverseString.join('');
    }
}

reverse(someString);

const baseCurrencies = ['USD', 'EUR'];
const additionalCurrencies = ['UAH', 'RUB', 'CNY'];
const allCurr = [...baseCurrencies, ...additionalCurrencies];

function availableCurr(arr, missingCurr) {
    if (arr.length === 0){
        return 'Нет доступных валют';
    } else {
        for (let c = 0; c < arr.length; c++) {
                if (arr[c] === missingCurr) {
                    arr.splice(c, 1);
                    c--;
                }
            }
        }
        return `Доступные валюты:\n${arr.join('\n')}\n`;
    }