import './login.scss';

import React from 'react';
import * as A from '../../lib/container';
import {ContainerBase} from '../../lib/container';

class LoginDialog extends ContainerBase {
  render() {
    return (
      <section className='c-login-dialog'>
        <h1>Login</h1>
        <p>
          Stuff and things!
        </p>
      </section>
    );
  }
}