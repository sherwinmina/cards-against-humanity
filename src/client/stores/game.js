import _ from "lodash";
import {Observable, BehaviorSubject} from 'rxjs';
import {mapOp$} from "shared/observable";
import * as A from "../actions";
import {createView$} from "../lib/stores";

const defaultView = {
  id: null,
  title: null, 
  step: A.STEP_DISPOSED,
  options : {},
  players: [], 
  messages: [],
  round: null,
  timer: null
};

const defaultPlayerView = {
  id: 1,
  hand: [],
  stack: null
};

export default class GameStore {
  constructor({dispatcher, socket}, user) {
    const passthroughAction = action => socket.emit("action", action);
    dispatcher.onRequest({
      [A.GAME_CREATE]: passthroughAction,
      [A.GAME_JOIN]: passthroughAction, 
      [A.GAME_SET_OPTIONS]: passthroughAction,
      [A.GAME_START]: passthroughAction,
      [A.GAME_SELECT_CARD]: passthroughAction,
      [A.GAME_SELECT_STACK]: passthroughAction,
      [A.GAME_SEND_MESSAGE]: passthroughAction
    });

    this.view$ = createView$(dispatcher, A.VIEW_GAME, defaultView);
		this.player$ = createView$(dispatcher, A.VIEW_PLAYER, defaultPlayerView);

    const isLoggedIn$ = user.details$.map(d => d.isLoggedIn);

    this.opCreateGame$ = mapOp$(
      dispatcher.on$(A.GAME_CREATE),
      isLoggedIn$);

		this.opJoinGame$ = mapOp$(
			dispatcher.on$(A.GAME_JOIN));

    this.opSetOptions$ = mapOp$(
			dispatcher.on$(A.GAME_SET_OPTIONS),
			isLoggedIn$);

    this.opStart$ = mapOp$(
			dispatcher.on$(A.GAME_START),
			isLoggedIn$);

    const playerAndGame$ = Observable.combineLatest(this.view$, this.player$);

    this.opSelectCard$ = mapOp$(
			dispatcher.on$(A.GAME_SELECT_CARD),
			playerAndGame$.map(([game, player]) => {
				const ourPlayer = _.find(game.players, {id: player.id});
				return ourPlayer && game.step == A.STEP_CHOOSE_WHITES && ourPlayer.isPlaying;
			}));    

    this.opSelectStack$ = mapOp$(
			dispatcher.on$(A.GAME_SELECT_STACK),
			playerAndGame$.map(([game, player]) => {
				const ourPlayer = _.find(game.players, {id: player.id});
				return ourPlayer && game.step == A.STEP_JUDGE_STACKS && ourPlayer.isCzar;
			}));

		this.opSendMessage$ = mapOp$(
			dispatcher.on$(A.GAME_SEND_MESSAGE),
			isLoggedIn$);
  }
}