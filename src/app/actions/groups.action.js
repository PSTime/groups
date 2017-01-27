import {REMOVE_CARD} from '../constants/actionTypes.constant';

export const removeCard = index => {
  return {
    type: REMOVE_CARD,
    index
  };
};
