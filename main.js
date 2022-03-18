//import { xyz } from './js/utils';

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

/*
question2.addEventListener("input", charCounter(currywurst, charCounter))

function charCounter (currywurst, charCount) {
const textarea = document.getElementById(currywurst);
const count = textarea.value.length;
document.getElementById(charCount).textContent = ` ${count}`;
};
*/
