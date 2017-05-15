import './client.scss';

import React from 'react';
import ReactDOM from 'react-dom';

import AppContainer from './components/app';

function main() {
  const AppContainer = require("./components/app").default;
  ReactDOM.render(<AppContainer />, document.getElementById('mount'));
}

main();

if (module.hot) {
  module.hot.accept("./components/app", () => {
    main();
  });
}