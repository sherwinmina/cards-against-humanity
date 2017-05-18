import './app.scss';

import React, {Component} from 'react';
import dialogTypes from "./dialogs";

class AppContainer extends Component {
  componentDidMount() {
    console.log("Hey there!");
  }

  render()  {
    const {main, sidebar} = this.props;

    return (
      <div className={`c-application`}>
        <div className="inner">
          <div className="sidebar">
            {sidebar}
          </div>

          <div className="main">
            {main}
          </div>
        </div>
      </div>
    );
  }
  _click() {
    console.log("clicked");
  }
}

export default AppContainer;