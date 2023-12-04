const bodyElement = document.querySelector('[data-js="body"]');
const toggleButton = document.querySelector('[data-js="toggle-button"]');

toggleButton.addEventListener("click", () => {
  bodyElement.classList.toggle("dark");
});

const cardContainer = document.querySelector('[data-js="card-container"]');

function createQuestionCard() {
  cardElement = document.createElement("article");
  cardElement.classList.add("card__element");

  cardBookmarkButton = document.createElement("button");
  cardBookmarkButton.setAttribute("data-js", "card-bookmark-button");
  cardElement.append(cardBookmarkButton);

  cardBookmarkButtonIcon = document.createElement("img");
  cardBookmarkButtonIcon.src = "./assets/bookmark-icon_outline.svg";
  cardBookmarkButtonIcon.classList.add("card__bookmark-icon");
  cardBookmarkButton.append(cardBookmarkButtonIcon);

  cardQuestion = document.createElement("p");
  cardQuestion.classList.add("card__question");
  cardQuestion.textContent = "This is question?";
  cardElement.append(cardQuestion);

  cardAnswerButton = document.createElement("button");
  cardAnswerButton.classList.add("card__answer-button");
  cardAnswerButton.setAttribute("data-js", "card-answer-button");
  cardAnswerButton.textContent = "Show answer";
  cardElement.append(cardAnswerButton);

  cardAnswer = document.createElement("p");
  cardAnswer.classList.add("card__answer");
  cardAnswer.textContent = "This is answer!";
  cardElement.append(cardAnswer);

  cardTagList = document.createElement("ul");
  cardTagList.classList.add("card__tag-list");
  cardTag = document.createElement("li");
  cardTag.classList.add("card__tag");
  cardTag.textContent = "tag";
  cardElement.append(cardTagList);
  cardTagList.append(cardTag);

  cardContainer.append(cardElement);
}

createQuestionCard();
