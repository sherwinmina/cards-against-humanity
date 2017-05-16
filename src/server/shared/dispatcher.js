import _ from 'lodash';
import {observable} from 'rxjs';
import * as A from './actions';

export class Dispatcher {
	constructor() {
		this._handlers = {};
		this._emitBuffer = [];
		this._inEmit = false;
	}

on(typeOrCallbacks, callback = null, statusFilter = null) {
		if (_.isObject(typeOrCallbacks)) {
			const unreg = _.map(
				typeOrCallbacks,
				(callback, type) => this.on(type, callback, statusFilter));

			return () => unreg.forEach(unsub => unsub());
		}

		if (!_.isFunction(callback))
			throw new Error("callback must be of type function");

		const type = typeOrCallbacks;
		const handler = {statusFilter, callback};

		if (!this._handlers.hasOwnProperty(type))
			this._handlers[type] = [handler];
		else
			this._handlers[type].push(handler);

		return () => {
			const handlers = this._handlers[type];
			const index = handlers.indexOf(handler);
			if (index == -1)
				return;

			handlers.splice(index, 1);
		};
	}
