const compose = (...functions) => data => functions.reduceRight((value, func) => func(value), data);

const attrsToString = (obj = {}) => {
  const keys = Object.keys(obj);
  const attrs = [];

  for(let i = 0; i < keys.length; i++) {
    let attr = keys[i];
    attrs.push(`${ attr }="${ obj[attr] }"`);
  }

  const string = attrs.join('');
  return string;
}

const tag = t => content => `<${ t }>${ content }</${ t }>`;

const tableRowTag = tag('tr');

// Dos maneras de hacerlo.
// const tableRows = items => tableRowTag(tableCells(items));
const tableRows = items => compose(tableRowTag, tableCells)(items);

const tableCell = tag('td');
const tableCells = items => items.map(tableCell).join('');

const description = document.querySelector('#description');
const calories = document.querySelector('#calories');
const carbs = document.querySelector('#carbs');
const protein = document.querySelector('#protein');

let list = [];

description.onkeypress = description.classList.remove('is-invalid');
calories.onkeypress = calories.classList.remove('is-invalid');
carbs.onkeypress = carbs.classList.remove('is-invalid');
protein.onkeypress = protein.classList.remove('is-invalid');

const validateInputs = () => {
  /* if (description.val() === '') {
    description.addClass('is-invalid');
  } */

  description.value ? '' : description.classList.add('is-invalid');
  calories.value ? '' : calories.classList.add('is-invalid');
  carbs.value ? '' : carbs.classList.add('is-invalid');
  protein.value ? '' : protein.classList.add('is-invalid');

  if(description.value && calories.value && carbs.value && protein.value) {
    add();
  }
}

const add = () => {
  const newItem = {
    description: description.value,
    calories: parseInt(calories.value),
    carbs: parseInt(carbs.value),
    protein: parseInt(protein.value)
  }

  list.push(newItem);
  cleanInputs();
  console.log(list);
}

const cleanInputs = () => {
  description.value = '';
  calories.value = '';
  carbs.value = '';
  protein.value = '';
}
