const compose = (...functions) => data => functions.reduceRight((value, func) => func(value), data);

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

  description.value ? '' : description.classlist.add('is-invalid');
  calories.value ? '' : calories.classlist.add('is-invalid');
  carbs.value ? '' : carbs.classlist.add('is-invalid');
  protein.value ? '' : protein.classlist.add('is-invalid');

  if (description.value && calories.value && carbs.value && protein.value) {
    add();
  }
}

const add = () => {
  const newItem = {
    description: description.value,
    calories: parseInt(calories.value),
    carbs: parseInt(carbs.value),
    protein: parseInt(protein.value)
  };

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
