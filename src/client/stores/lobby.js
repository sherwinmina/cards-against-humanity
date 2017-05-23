import {Observable} from "rxjs";
import {Validator} from "shared/validation";
import {validateMessage} from "shared/validation/chat";
import {mapOp$} from "shared/observable";
import * as A from "../actions";

const defaultView = {
  messages: [
      {index: 1, name: "Alika", message: "Blegh"},
      {index: 2, name: "Moana", message: "Hello"},
      {index: 3, name: "Leilani", message: "Whatever"},
      {index: 4, name: "Keiki", message: "Just got here"},
      {index: 5, name: "Kealii", message: "aloha"},
    ],

  games: [
      {title: "Game 1", id: 1, players: ["one", "two", "three"]},
      {title: "Game 2", id: 2, players: ["John", "Joseph", "Mary"]},
      {title: "Game 3", id: 3, players: ["Jim", "Jake", "Akiko"]}
  ]
};


export default class LobbyStore {
  constructor({dispatcher},user){
    this.view$ = Observable.of(defaultView);

    dispatcher.onRequest({
      [A.LOBBY_JOIN]: action => dispatcher.succeed(action),

      [A.LOBBY_SEND_MESSAGE]: action => {
        const validator = new Validator();
        if (!user.isLogin)
          validator.push(validateMessage(action.message));

        if (Validator.didFail) {
          dispatcher.fail(action, validator.message);
          return;
        }
      }
    });

    this.opSendMessage$ = mapOp$(
      dispatcher.on$(A.LOBBY_SEND_MESSAGE),
      user.details$.map(u => u.isLoggedIn));
    
  }
}