export * from "./shared/actions";

export const GAME_DISPOSED = "GAME_DISPOSED";
export const gameDisposed = gameId => ({type: GAME_DISPOSED});

export const PLAYER_DISPOSED = "PLAYER_DISPOSED";
export const playerDisposed = (gameId, playerId) => ({ type: PLAYER_DISPOSED, gameId, playerId});

export const GAME_SUMMARRY_CHANGED = "GAME_SUMMARY_CHANGED";
export const gameSummaryChanged = (gameId, summary) => ({type: GAME_SUMMARRY_CHANGED, gameId, summary});
