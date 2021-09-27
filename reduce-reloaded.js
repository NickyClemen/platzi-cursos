const items = [1, 3, 2, 3];
const response = items.reduce((obj, item) => {
    if(!obj.hasOwnProperty(item)) {
        obj[item] = 1;
    } else {
        obj[item] += 1;
    }

    return obj;
}, {});

const data = [
    {
        name: "Nicolas",
        level: "low",
    },
    {
        name: "Andrea",
        level: "medium",
    },
    {
        name: "Zulema",
        level: "hight",
    },
    {
        name: "Santiago",
        level: "low",
    },
    {
        name: "Valentina",
        level: "medium",
    },
    {
        name: "Lucia",
        level: "hight",
    },
];

const reduceLevel = data
    .map(item => item.level)
    .reduce((obj, item) => {
        if(!obj.hasOwnProperty(item)) {
            obj[item] = 1;
        } else {
            obj[item] += 1;
        }

        return obj;
    }, {}); // pipenames: cuando la salida de una función es la entrada de otra.

// Reto.
const numbers = [1, 2, 3, 3, 4, 5, 2, 1, 1, 3, 4, 5, 6, 7, 5, 5, 4, 7, 8, 9, 8, 7, 5, 4, 5, 8, 9, 10, 10];
const ranges = ['1-5', '6-8', '9-10'];
const reduceNumber = numbers.reduce((counter, number) => {
    if(number >= 1 && number <= 5) counter[ranges[0]] += 1;
    else if(number >= 6 && number <= 8) counter[ranges[1]] += 1;
    else if(number >= 9 && number <= 10) counter[ranges[2]] += 1;

    return counter;
}, {
    [ranges[0]]: 0,
    [ranges[1]]: 0,
    [ranges[2]]: 0,
});

console.log(response);
console.log(reduceLevel);
console.log(reduceNumber);