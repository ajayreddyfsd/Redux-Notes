import React from 'react';
import { Provider, useSelector, useDispatch } from 'react-redux';
import store from './store';

import { toggleTheme } from './redux/theme/actions';
import { selectTheme } from './redux/theme/selectors';

const ThemeToggler = () => {
  const theme = useSelector(selectTheme);     // Access Redux state
  const dispatch = useDispatch();             // Get dispatch function

  return (
    <div>
      <h2>Theme Toggle (Redux)</h2>
      <p>Current theme: {theme}</p>
      <button onClick={() => dispatch(toggleTheme())}>
        Toggle Theme
      </button>
    </div>
  );
};

// ✅ Wrap the app.js with <Provider store={store}>
const App = () => (
  <Provider store={store}>
    <ThemeToggler />
  </Provider>
);

export default App;
