'use strict';

const CARROT_SIZE = 80;
const CARROT_COUNT = 15;
const BUG_COUNT = 15;
const GAME_DURATION_SEC = 30;

const field = document.querySelector('.game__field');
const fieldRect = field.getBoundingClientRect();
const gameBtn = document.querySelector('.game__button');
const gameTimer = document.querySelector('.game__timer');
const gameScore = document.querySelector('.game__score');
const popup = document.querySelector('.pop-up');
const popupText = document.querySelector('.pop-up__message');
const popupRefresh = document.querySelector('.pop-up__refresh');
const carrotSound = new Audio('sound/carrot_pull.mp3');
const bugSound = new Audio('sound/bug_pull.mp3');
const gameWinSound = new Audio('sound/game_win.mp3');
const bgSound = new Audio('sound/bg.mp3');
const alertSound = new Audio('sound/alert.wav');

let started = false;
let score = 0;
let timer = null;

const playSound = sound => {
  sound.play();
};

const stopSound = sound => {
  sound.pause();
};

const finishGame = win => {
  started = false;
  score = 0;
  if (win) {
    playSound(gameWinSound);
  } else {
    playSound(alertSound);
  }
  stopGameTimer();
  hideStopButton();
  showPopUpWithText(win ? 'YOU WON 🎉' : 'YOU LOST ❗❗');
  stopSound(bgSound);
};

const updateScoreBoard = () => {
  gameScore.innerText = CARROT_COUNT - score;
};

const onFieldClick = event => {
  if (!started) {
    return;
  }
  const target = event.target;
  if (target.matches('.carrot')) {
    target.remove();
    score++;
    playSound(carrotSound);
    updateScoreBoard();
    if (score === CARROT_COUNT) {
      finishGame(true);
    }
  } else if (target.matches('.bug')) {
    playSound(bugSound);
    stopGameTimer();
    finishGame(false);
  }
};

field.addEventListener('click', onFieldClick);

gameBtn.addEventListener('click', () => {
  if (started) {
    stopGame();
  } else {
    startGame();
  }
});

popupRefresh.addEventListener('click', () => {
  startGame();
  hidePopup();
  gameBtn.style.visibility = 'visible';
});

const randomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min);
};

const addItem = (className, count, imgPath) => {
  const x1 = 0;
  const y1 = 0;
  const x2 = fieldRect.width - CARROT_SIZE;
  const y2 = fieldRect.height - CARROT_SIZE;

  for (let i = 0; i < count; i++) {
    const item = document.createElement('img');
    item.setAttribute('class', className);
    item.setAttribute('src', imgPath);
    item.style.position = 'absolute';
    const x = randomNumber(x1, x2);
    const y = randomNumber(y1, y2);
    item.style.left = `${x}px`;
    item.style.top = `${y}px`;
    field.appendChild(item);
  }
};

const showStopButton = () => {
  const icon = gameBtn.querySelector('.fa-play');
  if (icon) {
    icon.classList.add('fa-stop');
    icon.classList.remove('fa-play');
  }
};

const hideStopButton = () => {
  gameBtn.style.visibility = 'hidden';
};

const showTimerAndScore = () => {
  gameTimer.style.visibility = 'visible';
  gameScore.style.visibility = 'visible';
};

const updateTimerText = time => {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  gameTimer.innerText = `${minutes}:${seconds}`;
};

const startGameTimer = () => {
  let remainingTimeSec = GAME_DURATION_SEC;
  updateTimerText(remainingTimeSec);
  timer = setInterval(() => {
    if (remainingTimeSec <= 0) {
      stopGameTimer();
      finishGame(CARROT_COUNT === score);
      return;
    }
    updateTimerText(--remainingTimeSec);
  }, 1000);
};

const stopGameTimer = () => {
  clearInterval(timer);
};

const startGame = () => {
  started = true;
  initGame();
  showStopButton();
  showTimerAndScore();
  startGameTimer();
  playSound(bgSound);
};

const stopGame = () => {
  started = false;
  score = 0;
  hideStopButton();
  stopGameTimer();
  showPopUpWithText('REPLAY ❓');
  playSound(alertSound);
  stopSound(bgSound);
};

const showPopUpWithText = text => {
  popupText.innerText = text;
  popup.classList.remove('pop-up--hide');
};

const hidePopup = () => {
  popup.classList.add('pop-up--hide');
};

const initGame = () => {
  field.innerHTML = ``;
  gameScore.innerHTML = CARROT_COUNT;
  addItem('carrot', CARROT_COUNT, 'img/carrot.png');
  addItem('bug', BUG_COUNT, 'img/bug.png');
};
