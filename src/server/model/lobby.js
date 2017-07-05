import _ from "lodash";
import * as A from "./actions";
import {RoomBase} from "../lib/room";

export class Lobby extends RoomBase {
  get view() {
    return {
      messages: this.messages.slice(),
      games: this.games.map(game => ({
        id: game.id,
        title: game.title,
        players: game.players.map(p => p.name)
      }))
    };
  }
}