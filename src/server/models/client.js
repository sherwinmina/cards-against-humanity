import * as A from '../actions';
import {Dispatcher} from '../shared/dispatcher';

export class Client extends Dispatcher {
  get details() {
    return {
      id: this.id,
      isLoggedIn: this.LoggedIn,
      name: this.name
    };
  }

  constructor(socket, app) {
    super();
    this.id = socket.id;
    this.LoggedIn = false;
    this.name = null;
    this.app = app;

    this._socket = socket;
    this.onDisposes = [];

    this._onDisposes.push(app.addClient(this));
    this.emit(A.userDetailsSet(this.details));

    socket.on("action", action => super.emit(action));
    socket.on("disconnect", () => this.onDisposes());

    this._installHandlers();
  }

  _installHandlers() {
    
  }
}