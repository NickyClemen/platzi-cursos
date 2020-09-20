const compose = (...functions) => data => functions.reduceRight((value, func) => func(value), data);

const description = document.querySelector('#description');
const calories = document.querySelector('#calories');
const carbs = document.querySelector('#carbs');
const protein = document.querySelector('#protein');

description.keypress(() => {
  description.classList.remove('is-invalid');
});

calories.keypress(() => {
  calories.classList.remove('is-invalid');
});

carbs.keypress(() => {
  carbs.classList.remove('is-invalid');
});

protein.keypress(() => {
  protein.classList.remove('is-invalid');
});

const validateInputs = () => {
  /* if (description.val() === '') {
    description.addClass('is-invalid');
  } */

  description.value ? '' : description.classList.add('is-invalid');
  calories.value ? '' : calories.classList.add('is-invalid');
  carbs.value ? '' : carbs.classList.add('is-invalid');
  protein.value ? '' : protein.classList.add('is-invalid');

  if(description.value && calories.value && carbs.value && protein.value) {
    console.log('OK.');
  }
}

