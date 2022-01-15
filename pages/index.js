const firstCard = document.querySelector('.element'); // выбираем в проекте класс первой карточки;
const secondCard = document.querySelector('.element_position_second'); // выбираем в проекте класс второй карточки;
const thirdCard = document.querySelector('.element_position_third'); // выбираем в проекте класс третьей карточки;

function handleCardChoice(card, activeCard, anotherCard) { // объявляем функцию для обработки нажатия на карточку;
  card.classList.add('element_active');
  activeCard.classList.remove('element_active');
  anotherCard.classList.remove('element_active');
}

firstCard.addEventListener('click', () => handleCardChoice(firstCard, secondCard, thirdCard)); // подключаем "слушатели";
secondCard.addEventListener('click', () => handleCardChoice(secondCard, firstCard, thirdCard));
thirdCard.addEventListener('click', () => handleCardChoice(thirdCard, firstCard, secondCard));
