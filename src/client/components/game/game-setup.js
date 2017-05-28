import "./game-setup.scss";

import React from "react";
import _ from "lodash";
import * as A from "../../actions";
import {ContainerBase} from "../../lib/component";

export default class GameSetup extends ContainerBase {
  constructor(props) {
    super(props);

    this._setScoreLimit = (e) => {
      if (!this.state.opSetOptions.can)
        return;

      this.request(A.gameSetOptions(this.state.game.id, {
        ...this.state.game.options,
        scoreLimit: parseInt(e.target.value)
      }));  
    };
 
  }

  render() {
    return (
      <Section className="c-game-setup">
        GameSetup
      </Section>
    );
  }
}

function SetList({sets, toggleSet}) {
  return <p>SETS</p>;
}