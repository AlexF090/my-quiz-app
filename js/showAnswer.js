document
  .querySelector("button[data-button-value='answer__button--toggle1']")
  .addEventListener("click", function () {
    document
      .querySelector(".card__answer--show1") /* Hier paragraph*/
      .classList.toggle("card__answer--showAnswer"); /* Hier class*/
  });

document
  .querySelector("button[data-button-value='answer__button--toggle2']")
  .addEventListener("click", function () {
    document
      .querySelector(".card__answer--show2")
      .classList.toggle("card__answer--showAnswer");
  });

document
  .querySelector("button[data-button-value='answer__button--toggle3']")
  .addEventListener("click", function () {
    document
      .querySelector(".card__answer--show3")
      .classList.toggle("card__answer--showAnswer");
  });

document
  .querySelector("button[data-button-value='answer__button--toggle4']")
  .addEventListener("click", function () {
    document
      .querySelector(".card__answer--show4")
      .classList.toggle("card__answer--showAnswer");
  });
