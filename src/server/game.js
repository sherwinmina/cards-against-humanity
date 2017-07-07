import _ from "lodash";
import * as A from "../actions";
import {Validator} from "../shared/validation";
import {RoomBase} from "../lib/room";
import {Player} from "./player";

export const MINIMUM_PLAYERS = 2;

export class Game extends RoomBase {
  get view() {
    return {
      id: this.id,
      title: this.title,
      step: this.step,
      options: this.options,
      players: this.players.map(player => player.summary),
      messages: this.messages.slice(),
      round: this.round && this.round.view,
      timer: this.timer
    };
  }
}