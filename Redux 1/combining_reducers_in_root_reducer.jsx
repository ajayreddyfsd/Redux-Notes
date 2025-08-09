//! likewise we write multiple folders for different things
//! and then combine all of them into one single reducer and one single state
//! redux/rootReducer.js
import { combineReducers } from 'redux';
import counterReducer from './counter/reducer';
import themeReducer from './theme/reducer';

const rootReducer = combineReducers({
  counter: counterReducer,
  theme: themeReducer
});

export default rootReducer;


//! global state gets combined as well
//! and we need to access items like state.reducer.item