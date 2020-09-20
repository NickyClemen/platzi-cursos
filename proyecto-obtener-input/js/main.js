const compose = (...functions) => data => functions.reduceRight((value, func) => func(value), data)

const description = document.querySelector('#description');
const calories = document.querySelector('#calories');
const carbs = document.querySelector('#carbs');
const protein = document.querySelector('#protein');

