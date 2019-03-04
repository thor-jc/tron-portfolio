import {
  FETCH_ACCOUNTS
} from '../actions/types';

const INITIAL_STATE = {
  accounts: []
};

export default function (state = INITIAL_STATE, action) {
  switch (action.types) {
    case FETCH_ACCOUNTS:
      return action.payload;
    default:
      return state;
  }
}
