const cards = document.querySelectorAll('.card');

cards.forEach(card => {
  const button = card.querySelector('.answerButton');
  const answer = card.querySelector('.card__answer');
  button.addEventListener('click', () => {
    answer.classList.toggle('card__answer--showAnswer');
  });
});
