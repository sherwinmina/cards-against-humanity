import {Dispatcher} from '../dispatcher';
import * as A from '../actions';

const TEST_ACTION_1 = "TEST_ACTION_1";
const testAction1 =(arg) => ({type: TEST_ACTION_1, arg});

describe('dispatcher', () => {
  let dispatcher;
  beforeEach(() => dispatcher = new Dispatcher());


});