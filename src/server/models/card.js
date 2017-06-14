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

  add(setName, set) {
    this._set[setName] = {
      id: setName,
      name: set.name,
      blackCards: set.blackCards.map((card, index) => ({
        id: `b-${setName}-${index}`,
        text: card.replace(PLACEHOLDER_REGEX, "______"),
        set: setName,
        getWhiteCardCount: getWhiteCardCount(card)
      })),
      whiteCards: set.whiteCards.map((card, index) => ({
        id: `w-${setName}-${index}`,
        text: card,
        set: setName,
      }))
    };
  }

  generateDecks(setIds = null) {
    const sets = setIds ? setIds.map(s => this.sets[s]) : _.values(this._sets);
    if (!sets.length)
      throw new Error("Cannot generate deck withouth any sets selected");

      const whiteCards = _.flatMap(sets, s => s.whiteCards);
      shuffle(whiteCards);

      const blackCards = ._flatMap(sets, s=> s.blackCards);
      shuffle(blackCards);

      return new Deck(whiteCards, blackCards);
  }
}

export class Deck {
  constructor(whiteCards, blackCards) {
    this._whiteDeck = whiteCards;
    this._blackDeck = blackCards;
    this._whiteDiscard = [];
    this.blackIndex = 0;
  }

  drawWhiteCards(count) {
    if (count >= this._whiteDeck.length) {
      if (count >= this._whiteDeck.length + this._whiteDiscard.length) 
        throw new Error(`Cannot draw ${count} cards, since there aren't enough left`);

        this._whiteDeck.push(...this._whiteDiscard);
        this._whiteDiscard = [];
        shuffle(this._whiteDeck);
    }    

    return this._whiteDeck.splice(0, count);
  }

  drawBlackCard() {
    if (this._blackIndex >= this._blackDeck.length) {
      shuffle(this._blackDeck);
      this._blackIndex = 0;
    }
    return this._blackDeck[this._blackIndex++];
  }
  
}