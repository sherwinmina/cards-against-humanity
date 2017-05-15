import './app.scss';

import React, {Component} from 'react';

class AppContainer extends Component {
  render()  {
    return (
      <section>
        <h1>Hello from React component</h1>
        <button onClick={this._click.bind(this)}> Please Click </button>
      </section>
    );
  }
  _click() {
    console.log("clicked");
  }
}

export default AppContainer;