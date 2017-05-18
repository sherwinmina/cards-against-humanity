import "./game.scss";

import React from 'react';
import {ContainerBase} from "../lib/component";

class GameContainer extends ContainerBase {
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