import * as A from "../../actions";
import {HandlerBase} from "../../lib/handler";
import {validateMessage} from " ../../shared/validation";

export default class GameHandlers extends HandlerBase {
  constructor(client, game) {
    super(client);
    this.game = game;
  }
}