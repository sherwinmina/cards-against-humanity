import{Observable, BehaviorSubject} from 'rxjs';
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
  }

}