import _ from 'lodash';
import {shuffle} from '../shared/utils';

const PLACEHOLDER_REGEX = /\{\}/g;

function getWhiteCardCount(text) {
  const match = text.match(PLACEHOLDER_REGEX);
  if (!match) {
    return 1;
  }

  return match.length;

}

export class CardDatabase {
  get sets() {
    return _.map(this._sets, set => ({id: set.id, name: set.name}));
  }

  constructor() {
    this.sets = {};
  }
  
  addSets(sets) {
    _.forOwn(sets, (set, setName) => this.addSets(setName, set));
  }
}