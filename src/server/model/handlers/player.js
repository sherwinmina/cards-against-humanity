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
    }
  }
}