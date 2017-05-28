import "./game-setup.scss";

import React from "react";
import _ from "lodash";
import * as A from "../../actions";
import {ContainerBase} from "../../lib/component";

export default class GameSetup extends ContainerBase {
  render() {
    return <Section className="c-game-setup">GameSetup</Section>;
  }
}