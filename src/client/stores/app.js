import * as A from '../actions';

export default class AppStore {
  constructor({dispatcher}) {
    this.dialog$ = dispatcher
      .on$(A.DIALOG_SET)
      .scan((stack, action) => {

      }, []);
  }

}