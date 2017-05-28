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
  constructor(props) {
		super(props);

		this._exitGame = () => this.props.router.push("/");
		this._login = () => this.dispatch(A.dialogSet(A.DIALOG_LOGIN, true));
	}

	componentWillMount() {
		const {stores: {user, game}} = this.context;
		this.subscribe(user.opLogin$, opLogin => this.setState({opLogin}));
		this.subscribe(game.view$, game => this.setState({game}));
	}

  render () {
    const {opLogin, game} = this.state;

    return (
      <section className="c-game-sidebar">
				<div className="m-sidebar-buttons">
					{!opLogin.can ? null :
						<button className="m-button primary" onClick={this._login}>
							Login to join game
						</button>}

					<button className="m-button" onClick={this._exitGame}>Leave game</button>
				</div>
				{game.step == A.STEP_DISPOSED ? null :
					<PlayerList players={game.players} />}
			</section>
		);
  }
}

function PlayerList({players}) {
  return <p> players.map( p => p.name).join(", ")</p>;
}

export default {
  main: GameContainer,
  sidebar: GameSidebar
};