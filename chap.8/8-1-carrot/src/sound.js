'use strict';

const carrotSound = new Audio('sound/carrot_pull.mp3');
const bugSound = new Audio('sound/bug_pull.mp3');
const gameWinSound = new Audio('sound/game_win.mp3');
const bgSound = new Audio('sound/bg.mp3');
const alertSound = new Audio('sound/alert.wav');

const playSound = sound => {
  sound.play();
};

const stopSound = sound => {
  sound.pause();
};

export const playCarrot = () => {
  playSound(carrotSound);
};
export const stopCarrot = () => {
  stopSound(carrotSound);
};

export const playBug = () => {
  playSound(bugSound);
};

export const playWin = () => {
  playSound(gameWinSound);
};

export const playBg = () => {
  playSound(bgSound);
};

export const stopBg = () => {
  stopSound(bgSound);
};

export const playAlert = () => {
  playSound(alertSound);
};
