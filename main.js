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

// Display the right Page

// const buttons = document.querySelectorAll('.navList li');
// const article = document.querySelectorAll('.article');

// buttons.forEach((item, index) => {
// item.addEventListener('click', () => {
// article.forEach(item => {
// item.style.display = "none';
// });
// article[index].style.display = 'block';
// });
// });

// const buttons = document.querySelectorAll('.navList li');
// const pages = document.querySelectorAll('.article');
// const hide = document.getElementsByClassName('hide');

// // console.log(buttons);

// buttons.forEach(buttons => {
//   console.log(buttons);
//   hide.classList.toggle('show');
// });

// document.querySelectorAll(buttons).forEach(el => {
//   el.addEventListener('click', e => {
//     if(buttons.classList()) el.querySelector('article').classList.toggle('.show');
//   });
// })

//  document.querySelectorAll(navList).forEach(el => {}

//    );

// const nav = document.querySelectorAll('.navList li');
// console.log(nav);

// nav.forEach(listItem => {

//   listItem.addEventListener('click', () => {
//     const articles = document.querySelectorAll('article');
//     articles.forEach(item, index => {
//       item.classList.add('hide');
//     })
//   });
// });

const buttons = document.querySelectorAll('.navList li');
const article = document.querySelectorAll('article');

buttons.forEach((item, index) => {
  item.addEventListener('click', () => {
    article.forEach(item => {
      item.classList.add('hide');
    });
    // console.log(article[index]);
    article[index].classList.remove('hide');
  });
});

/* OLD!!!!!!!!!!!!!!!
const nav = document.querySelectorAll('.navList li');
console.log(nav);

nav.forEach(listItem => {
  listItem.addEventListener('click', () => {
    const articles = document.querySelectorAll('article');
    articles.forEach(item => {
      if (item.target.getAttribute('quiz-app') === true) {
        const articleQuizApp = document.querySelector(
          'article[data-title="quiz-app"]'
        );
        articleQuizApp.classList.add('show');
      }
      // if (data-nav === 'bookmarks') {
      //   const articleQuizApp = document.querySelector(
      //     'article[data-title="bookmarks"]'
      //   );
      //   articleQuizApp.classList.add('show');
      // }
      // if (data-nav === 'create') {
      //   const articleQuizApp = document.querySelector('article[data-title="create"]');
      //   articleQuizApp.classList.add('show');
      // }
      // if (data-nav === 'profile') {
      //   const articleQuizApp = document.querySelector('article[data-title="profile"]');
      //   articleQuizApp.classList.add('show');
      // }
      */
