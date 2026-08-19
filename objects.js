const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red'
    },
    makeTest: function() {
        console.log('Test');    
    }
};

const {border, bg} = options.colors;
console.log(border);

let c = 0;
for (let key in options) {
    if (typeof (options[key]) === 'object') {
        for (let i in options[key]) {
            console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
            c++;
        }
    } else {
        console.log(`Свойство ${key} имеет значение ${options[key]}`);
        c++;
    }
}    
console.log(`Всего свойств: ${c}`)   
console.log(`Ключи:${Object.keys(options).length}`);
options.makeTest();