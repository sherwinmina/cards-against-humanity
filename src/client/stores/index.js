import AppStore from './app';
import GamesStore from './game';
import LobbyStore from './lobby';
import UserStore from './store';

export default function(services) {
  const user = new UserStore(services);
  const game = new GamesStore(services, user);
  const lobby = new LobbyStore(services, user);
  const app = new AppStore(services);

  return {
    user, game, lobby, app
  };
}
