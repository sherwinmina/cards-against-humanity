import "./login.scss";

import React from "react";
import * as A from "../../actions";
import {ContainerBase} from "../../lib/component";
import {TextInput} from '../controls';

class LoginDialog extends ContainerBase {
  constructor(props) {
    super(props);
    this._close = (e) => {
      e.preventDefault();
      this.dispatch(A.dialogSet(A.DIALOG_LOGIN, false));
    };

    this._login = (e) => {
      e.preventDefault();
      this.request(A.userLogin(this._username.value));

    };
  }

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

export default {
  id: A.DIALOG_LOGIN,
  component: LoginDialog
};