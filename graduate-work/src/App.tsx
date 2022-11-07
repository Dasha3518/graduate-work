import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { RootRouter } from './router';
import { createContext, useState } from 'react';
import { Provider } from 'react-redux';
import store from './utils/store';

// export const Context = createContext<{
//   isDark: boolean;
//   setIsDark: (value: boolean) => void;
// }>({isDark: false, setIsDark: () => {} });
export const Context = createContext<{
  isDark: boolean;
  setIsDark: (value: boolean) => void;
  user:  null;
  setUser: (value:  null) => void;
}>({
  isDark: false,
  setIsDark: () => {},
  user: null,
  setUser: (value:  null) => {},
});


function App() {
  return (
    <Provider store={store}>
    <BrowserRouter>
      <RootRouter/>
    </BrowserRouter>
    </Provider>
  );
}

export default App;
