import {
  APP_LOADING_COMPLETE
} from '../actions/types';

const INITIAL_STATE = {
  isLoadingComplete: false
};

export default function (state = INITIAL_STATE, action) {
  switch (action.types) {
    case APP_LOADING_COMPLETE:
      return { ...state.app, isLoadingComplete: true };
    default:
      return state;
  }
}
