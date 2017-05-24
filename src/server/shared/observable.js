import {Observable} from 'rxjs';
import * as A from './actions';


export function mapOp$(op$, can$ = Observable.of(true)) {
  const operations$ = op$
    .startWith({})
    .combineLatest(can$)
    .map(([action, can]) => {
    })
    .publishReplay(1);

  operations$.connect();
  return operations$;
}