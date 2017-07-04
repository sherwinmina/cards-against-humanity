import {Observable} from "rxjs";
import * as A from "../actions";
import {mergeDiff} from "shared/diff";

export function createdView$(dispatcher, viewType, defaultView) {
  const mergeView$ = dispatcher
    .on$(A.MERGE_VIEW)
    .filter( a => a.view == viewType) 
    .map(action => {
      return view => mergeDiff(view, action.diff) {
        return mergeDiff(view, action.diff);
      };
    });

    const reconnect$ = dispatcher
      .on$(A.APP_CONNECTION_RECONNECTED)
      .map(() => () => defaultView);

    const view$ = Observeble.merge(mergeView$, reconnect$)
      .scan((view, op) => op(view), {})
      .startWith(defaultview)
      .publishReplay(1);

    view$.connect();
    return view$;
}