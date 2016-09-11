import { combineReducers } from 'redux';
import challengers from './challengers';
import { reducer as formReducer} from 'redux-form';

const rootReducer = combineReducers({
  challengers,
  form: formReducer
});

export default rootReducer;
 