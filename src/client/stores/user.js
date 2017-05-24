import{Observable, BehaviorSubject} from 'rxjs';
import{validateName} from 'shares/validate/user';
import {mapOp$} from 'shared/observble';
import * as A from '../actions';

const defaultDeatails = {
  isLiggedIn: false,
  id: null,
  name: null
};

export default class UserStore {
  constructor({dispatcher}) {
    this.details$ = new BehaviorSubject(defaultDeatails);

    this.details$.subscribe(details => 
      Object.keys(details).forEach(k => this[k] = details[k]));

      dispatcher.onRequest({
        [A.USER_LOGIN]: (action) => {
          const validator = validateName(action.name);
          if (validator.didFail) {
            dispatcher.fail(action. validator.message);
            return;
          }

          dispatcher.succeed(action);
          this.details$.next({
            isLoggedIn: true,
            id: 4432,
            name: action.name
          });
        }
      });
      
      this.opLogin$ = mapOp$(
        dispatcher.on$(A.USER_LOGIN),
        this.details$.map(details => ! details.isLiggedIn));
  }
}