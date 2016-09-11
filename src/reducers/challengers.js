import { FETCH_CHALLENGERS } from '../actions/index';

const INITIAL_STATE = { all: [] };

export default function (state = INITIAL_STATE, action) {
  console.log(action);
  switch (action.type) {
    case FETCH_CHALLENGERS:
      return { all: action.payload.data }
    default:
      return state
  }
}
