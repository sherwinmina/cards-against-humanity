import React, { Component, Children } from 'react';
import PropTypes from 'prop-types';

export class StoreProvider extends Component {
  static PropTypes = {
    stores: PropTypes.object.isRequired,
    services: PropTypes.object.isRequired
  };

  render() {
    return Children.only(this.props.children);
  }
}