//import { xyz } from './js/utils';

// const { config } = require("@storybook/addon-actions");

//export

//Question Counter
const question1 = document.getElementById('question');
question1.addEventListener('input', () => {
  const count = question1.value.length;
  document.getElementById('charCount1').textContent = ` ${count} sign(s)`;
});

//Answer Counter
const answer = document.getElementById('answer');
answer.addEventListener('input', () => {
  const count = answer.value.length;
  document.getElementById('charCount2').textContent = ` ${count} sign(s)`;
});

//Tags Counter
const tags = document.getElementById('tags');
tags.addEventListener('input', () => {
  const count = tags.value.length;
  document.getElementById('charCount3').textContent = ` ${count} sign(s)`;
});

const buttons = document.querySelectorAll('.nav_icon'),
  article = document.querySelectorAll('article');

buttons.forEach((item, index) => {
  item.addEventListener('click', () => {
    article.forEach(item => {
      item.classList.add('hide');
      buttons[index].classList.remove('current');
    });
    buttons.forEach(item => {
      item.classList.remove('current');
    });
    console.log(article[index]);
    article[index].classList.remove('hide');
    buttons[index].classList.add('current');
  });
});
