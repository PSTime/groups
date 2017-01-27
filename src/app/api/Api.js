import {eventChannel, END} from 'redux-saga';
import random from 'lodash/random';
import sample from 'lodash/sample';
import TABLES_TYPES from '../constants/tablesTypes.constant';

/*
generate mock data
 */
const tablesGenerator = () => {
  const count = random(100, 300);
  const tables = [];

  for (let i = 0; i < count; i++) {
    const type = sample(TABLES_TYPES);
    const maxPlayers = random(4, 12);
    const players = random(0, maxPlayers - 1);
    const table = {
      id: i,
      type: type.title,
      name: `${type.title} Game ${random(1, 10000)}`,
      warning: (players >= maxPlayers - 1),
      maxPlayers,
      players
    };
    tables.push(table);
  }
  return tables;
};

export default class Api {
  static getTables() {
    return eventChannel(emitter => {
      const iv = setInterval(() => {
        const tables = tablesGenerator();
        if (tables) {
          emitter(tables);
        } else {
          emitter(END);
          clearInterval(iv);
        }
      }, 5000);
      // The subscriber must return an unsubscribe function
      return () => {
        clearInterval(iv);
      };
    });
  }
}
