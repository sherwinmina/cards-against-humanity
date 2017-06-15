import _ from "lodash";
import * as A from "../actions";
import {makeDiff, IS_UNCHANGED} from "../shared/diff";

export class RoomBase {
  get View() {
    throw new Error("please implement a view");
  }

  constructor(viewId) {
    this.id = undefined;
    this._viewId = viewId;
    this._inTick = false;
    this._lastView = {};
    this.clients = [];
  }

  addClient(client) {
    this.clients.push(client);
  }
}