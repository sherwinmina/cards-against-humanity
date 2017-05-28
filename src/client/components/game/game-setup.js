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

		this._toggleSet = (set) => {
			const {opSetOptions, game: {options, id}} = this.state;
			if (!opSetOptions.can)
				return;

			const newSets = set.isSelected
				? options.sets.filter(setId => setId != set.id)
				: options.sets.concat(set.id);

			this.request(A.gameSetOptions(id, {
				...options,
				sets: newSets
			}));
		};

		this._startGame = (e) => {
			e.preventDefault();

			const {opStart, game: {id}} = this.state;
			if (!opStart.can)
				return;

			this.request(A.gameStart(id));
		};
  }  
  
	componentWillMount() {
		const {stores: {app, game}} = this.context;
		this.subscribe(app.view$.map(v => v.sets), sets => this.setState({sets}));
		this.subscribe(game.view$, game => this.setState({game}));
		this.subscribe(game.opSetOptions$, opSetOptions => this.setState({opSetOptions}));
		this.subscribe(game.opStart$, opStart => this.setState({opStart}));
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