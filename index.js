// Toggle Dark Mode

const bodyElement = document.querySelector('[data-js="body"]');
const toggleButton = document.querySelector('[data-js="toggle-button"]');

function darkMode() {
  toggleButton.addEventListener("click", () => {
    const headerTitle = document.querySelector('[data-js="header-title"]');
    const cardElement = document.querySelector('[data-js="card-element"]');
    const cardBookmarkButton = document.querySelector(
      '[data-js="card-bookmark-icon"]'
    );
    const cardQuestion = document.querySelector('[data-js="card-question"]');
    const cardAnswerButton = document.querySelector(
      '[data-js="card-answer-button"]'
    );
    const cardAnswer = document.querySelector('[data-js="card-answer"]');
    const cardTag = document.querySelector('[data-js="card-tag"]');

    bodyElement.classList.toggle("dark");
    headerTitle.classList.toggle("header__title--dark");
    cardElement.classList.toggle("card__element--dark");
    cardBookmarkButton.classList.toggle("card__bookmark-icon--dark");
    cardQuestion.classList.toggle("card__question--dark");
    cardAnswerButton.classList.toggle("card__answer-button--dark");
    cardAnswer.classList.toggle("card__answer--dark");
    cardTag.classList.toggle("card__tag--dark");
  });
}

darkMode();

// Question Card

const cardContainer = document.querySelector('[data-js="card-container"]');

function createQuestionCard() {
  cardElement = document.createElement("article");
  cardElement.classList.add("card__element");
  cardElement.setAttribute("data-js", "card-element");

  cardBookmarkButton = document.createElement("button");
  cardBookmarkButton.setAttribute("data-js", "card-bookmark-button");
  cardElement.append(cardBookmarkButton);

  cardBookmarkButtonIcon = document.createElement("img");
  cardBookmarkButtonIcon.src = "./assets/bookmark-icon_outline.svg";
  cardBookmarkButtonIcon.classList.add("card__bookmark-icon");
  cardBookmarkButtonIcon.setAttribute("data-js", "card-bookmark-icon");
  cardBookmarkButton.append(cardBookmarkButtonIcon);

  cardQuestion = document.createElement("p");
  cardQuestion.classList.add("card__question");
  cardQuestion.setAttribute("data-js", "card-question");
  cardQuestion.textContent = "This is question?";
  cardElement.append(cardQuestion);

  cardAnswerButton = document.createElement("button");
  cardAnswerButton.classList.add("card__answer-button");
  cardAnswerButton.setAttribute("data-js", "card-answer-button");
  cardAnswerButton.textContent = "Show answer";
  cardElement.append(cardAnswerButton);

  cardAnswer = document.createElement("p");
  cardAnswer.classList.add("card__answer");
  cardAnswer.setAttribute("data-js", "card-answer");
  cardAnswer.textContent = "This is answer!";
  cardElement.append(cardAnswer);

  cardTagList = document.createElement("ul");
  cardTagList.classList.add("card__tag-list");
  cardElement.append(cardTagList);

  cardTag = document.createElement("li");
  cardTag.classList.add("card__tag");
  cardTag.setAttribute("data-js", "card-tag");
  cardTag.textContent = "tag";
  cardTagList.append(cardTag);

  cardContainer.append(cardElement);
}

createQuestionCard();
