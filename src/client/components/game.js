import "./game.scss";

import React from 'react';
import * as A from "../actions";
import {ContainerBase} from "../lib/component";

class GameContainer extends ContainerBase {
  componentWillMount() {
    const {stores: {app}} = this.context;
    const {params} = this.props;
    const gameId = parseInt(params.gameId);

    this.subscribe(app.reconnected, () => this.request(A.gameId));

    this.request(A.gameJoin(gameId));
  }

  render () {
    return (
      <div>
        <p>GAME!</p>
      </div>
    );
  }
}

class GameSidebar extends ContainerBase {
  render () {
    return (
      <div>
          <p>GAME SIDEBAR!</p>
      </div>
    );
  }
}

export default {
  main: GameContainer,
  sidebar: GameSidebar
};