

//! redux file no. 1
//! redux/counter/types.js
// Action type constants
export const TOGGLE_THEME = 'TOGGLE_THEME';



//! redux file no. 2
//! redux/counter/actions.js
import { TOGGLE_THEME } from './types';

// Action creator
export const toggleTheme = () => ({ type: TOGGLE_THEME });



//! redux file no. 3
//! redux/counter/reducer.js
import { TOGGLE_THEME } from './types';

const initialState = {
  theme: 'light' // can be 'light' or 'dark'
};

// Reducer function: updates state based on action type
const themeReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_THEME:
      return {
        ...state,
        theme: state.theme === 'light' ? 'dark' : 'light'
      };
    default:
      return state;
  }
};

export default themeReducer;




//! redux file no. 4
//! redux/counter/selectors.js
// Selector function to get the theme value
export const selectTheme = (state) => state.theme.theme;












