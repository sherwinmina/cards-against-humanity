export const STATUS_REQUEST = "STATUS_REQUEST";
export const STATUS_FAIL = "STATUS_FAIL";
export const STATUS_SUCCESS = "STATUS_SUCCESS";

// -----------------------
// Helpers
export function request(action) {
	return {...action, status: STATUS_REQUEST};
}

export function fail(action, error) {
	return {...action, status: STATUS_FAIL, error};
}

export function succeed(action) {
	return {...action, status: STATUS_SUCCESS};
}

// -----------------------
// User Actions
export const USER_LOGIN = "USER_LOGIN";
export const userLogin = (name) => ({ type: USER_LOGIN, name});

export const USER_DETAILS_SET = "USER_DETAIL_SET";
export const userDetailSet = (details) => ({type: USER_DETAILS_SET, details});

// -----------------------
// Lobby Actions
export const LOBBY_SEND_MESSAGE = "LOBBY_SEND_MESSAGE";
export const lobbySendMessage = (message) => ({type: LOBBY_SEND_MESSAGE, message});

export const LOBBY_JOIN = "LOBBY_JOIN";
export const lobbyJoin = () => ({type: LOBBY_JOIN});


// -----------------------
// Game Actions
export const GAME_CREATE = "GAME_CREATE";
export const gameCreate = () => ({type: GAME_CREATE});

export const GAME_JOIN = "GAME_JOIN";
export const gameJoin = (gameId) => ({type: GAME_JOIN, gameId});

export const GAME_SET_OPTIONS = "GAME_SET_OPTIONS";
export const gameSetOptions = (gameId, options) => ({type: GAME_SET_OPTIONS, gameId, options});

export const GAME_START = "GAME_START";
export const gameStart = (gameId) => ({type: GAME_START, gameId});

export const GAME_SELECT_CARD = "GAME_SELECT_CARD";
export const gameSelectCard = (gameId, cardId) => ({type: GAME_SELECT_CARD, gameId, cardId});

export const GAME_SELECT_STACK = "GAME_SELECT_STACK";
export const gameSelectStack = (gameId, stackId) => ({type: GAME_SELECT_STACK, gameId, stackId});

export const GAME_SEND_MESSAGE = "GAME_SEND_MESSAGE";
export const gameSendMessage = (gameId, message) => ({type: GAME_SEND_MESSAGE, gameId, message});