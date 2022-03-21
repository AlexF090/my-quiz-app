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

// hide and show pages
//const
const buttons = document.querySelectorAll('.nav_icon'),
  article = document.querySelectorAll('article'),
  header = document.querySelector('h1');
// header.children[0].innerHTML =
//console
// console.log(header);

//function
buttons.forEach((item, index) => {
  item.addEventListener('click', () => {
    article.forEach(item => {
      //change article
      item.classList.add('hide'); //Add hide to articles
    });
    buttons.forEach(item => {
      //change buttons
      item.classList.remove('current'); //remove current class from buttons
    });
    /*header.forEach(item => {             //change header
      item.classList.remove('current');   //add new header
    });*/
    article[index].classList.remove('hide'); //Remove hide to articles
    buttons[index].classList.add('current'); //add current class to buttons
  });
});
