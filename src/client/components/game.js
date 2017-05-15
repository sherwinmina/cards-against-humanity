import "./game.scss";

import React, { Component } from 'react';

class GameContainer extends Component {
  render () {
    return (
      <div>
        <p>GAME!</p>
      </div>
    );
  }
}

class GameSidebar extends Component {
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
  sidebra: GameSidebar
};