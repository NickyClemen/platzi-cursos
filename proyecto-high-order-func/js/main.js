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

const tagAttrs = obj => (content = '') => `<${ obj.tag }${ obj.attrs ? ' ' :	 '' }${ attrsToString(obj.attrs) }>${ content }</${ obj.tag }>`;
const tag = t => {
  if(typeof t === 'string') {
    return tagAttrs({ tag: t });
  }

  return tagAttrs(t);
}

const tableRowTag = tag('tr');

// Dos maneras de hacerlo.
// const tableRows = items => tableRowTag(tableCells(items));
const tableRows = items => compose(tableRowTag, tableCells)(items);

const tableCell = tag('td');
const tableCells = items => items.map(tableCell).join('');

const trashIcon = tag({
  tag: 'i',
  attrs: {
    class: 'fas fa-trash-alt'
  }
})('');

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
  renderItems();
}

const updateTotals = () => {
  let calories = 0, carbs = 0, protein = 0;

  let totalCalories = document.querySelector('#totalCalories');
  let totalCarbs = document.querySelector('#totalCarbs');
  let totalProteins = document.querySelector('#totalProteins');

  list.map(item => {
    calories += item.calories,
    carbs += item.carbs,
    protein += item.protein;
  });

  totalCalories.textContent = calories;
  totalCarbs.textContent = carbs;
  totalProteins.textContent = protein;
}

const cleanInputs = () => {
  description.value = '';
  calories.value = '';
  carbs.value = '';
  protein.value = '';
}

const renderItems = () => {
  const tbody = document.querySelector('tbody');
  tbody.innerHTML = '';

  let rows = list.map((item, index) => {
    const removeButton = tag({
      tag: 'button',
      attrs: {
        class: 'btn btn-outline-danger',
        onclick: `removeItem(${ index })`,
      }
    })(trashIcon);

    console.log(removeButton);

    return tableRows([item.description, item.calories, item.carbs, item.protein, removeButton]);
  });

  tbody.innerHTML = rows.join('');
}

const removeItem = index => {
  list.splice(index, 1);
  updateTotals();
  renderItems();
}