'use strict';
import PopUp from './popup.js';
import { Reason, GameBuilder } from './game.js';
import * as sound from './sound.js';

const CARROT_COUNT = 10;
const BUG_COUNT = 10;
const GAME_DURATION_SEC = 20;

const game = new GameBuilder()
  .gameDuration(GAME_DURATION_SEC)
  .carrotCount(CARROT_COUNT)
  .bugCount(BUG_COUNT)
  .build();

const gameFinishBanner = new PopUp();

game.setGameStopListener(reason => {
  let message = '';
  switch (reason) {
    case Reason.cancel:
      sound.playAlert();
      message = 'Replay ❗';
      break;
    case Reason.win:
      sound.playWin();
      message = 'YOU WON ✨';
      break;
    case Reason.lose:
      sound.playBug();
      message = 'YOU LOSE 🎈';
      break;
    default:
      throw new Error('Not valid reason');
  }
  gameFinishBanner.showWithText(message);
});

gameFinishBanner.setClickListener(() => {
  game.start();
});
