import _ from "lodash";
import * as A from "../actions";
import {} from "../lib/room";

export const HAND_SIZE = 10;
export class Player extends RoomBase {
  get view() {
    return { 
      id: this.id,
      hand: this.hand.slice();
      stack: null
    };
  }
  get summary(){
    return {
      id: this.id,
      name: this.name,
      score: this.score,

      isCzar: false,
      isPlaying: false,
      isWinner: false
    };
  }

  constructor(game, id, name) {
    super(A.VIEW_PLAYER);
    this.name = name;
    this.id =id;
    this.game = game;
    this.score = 0;
    this.hand = [];
    this._isDisposed = false;
  }

  addPoints(points) {
    this._tick(() => this.score += points);
  }

  dispose() {
    if (this._isDisposed)
      return;
    
    this.hand = [];
    this._isDisposed = true;
    this.game.app.dispatcher.emit(A.playerDisposed(this.game.id, this.id));
    
  }
}