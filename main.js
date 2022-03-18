//import { xyz } from './js/utils';

//export

const question2 = document.getElementById('question');
question2.addEventListener('input', () => {
  const count = question2.value.length;
  document.getElementById('charCount').textContent = ` ${count}`;
});

/*
question2.addEventListener("input", charCounter(currywurst, charCounter))

function charCounter (currywurst, charCount) {
const textarea = document.getElementById(currywurst);
const count = textarea.value.length;
document.getElementById(charCount).textContent = ` ${count}`;
};
*/
