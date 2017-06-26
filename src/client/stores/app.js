import _ from 'lodash';
import {Observable, BehaviorSubject} from 'rxjs';
import * as A from '../actions';

const defaultView = {
	sets: [
		{id: "1ed", name: "Sherwin"},
		{id: "4ed", name: "Jessica"},
		{id: "3ed", name: "Nick"}
	]
};

export default class AppStore {
  constructor({dispatcher, socket}) {
		this.view$ = new BehaviorSubject(defaultView);

    this.dialogs$ = dispatcher
			.on$(A.DIALOG_SET)
			.scan((stack, action) => {
				_.remove(stack, {id: action.id});
				
				if (action.isOpen)
					stack.push({id: action.id, props: action.props});

				return stack;
			}, [])
			.startWith([])
			.publishReplay(1);
		
		this.dialogs$.connect();

		socket.on("connect", () => dispatcher.emit(A.appConnectionReconnected(A.CONNECTION_CONNECTED)));
		socket.on("reconnecting", () => dispatcher.emit(A.appConnectionReconnected(A.APP_CONNECTION_RECONNECTED)));
		socket.on("disconnect", () => dispatcher.emit(A.appConnectionReconnected(A.APP_CONNECTION_DISCONNECTED)));
		socket.on("reconnect", () => dispatcher.emit(A.appConnectionReconnected()));

		this.connection$ = dispatcher
			.on$(A.APP_CONNECTION_SET)
			.startWith(socket.connected ? A.CONNECTION_CONNECTED : A.CONNECTION_DISCONNECTED)
			.publishReplay(1);
			
		this.reconnected$ = Observable.empty();
  }
}