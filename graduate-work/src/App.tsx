import React, { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { RootRouter } from './router';
import { createContext, useState } from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import { IUser } from './types/auth';
import { getUser } from './api/auth';




export const Context = createContext<{
  user:   IUser | null;
  setUser: (value:  null) => void;
}>({
  user: null,
  setUser: (value: IUser | null) => {},
});
const access = localStorage.getItem("access");

function App() {
  const [user, setUser] = useState<IUser | null>(null);
  useEffect(() => {
    let isOk = true;

    if (access) {
      getUser()
        .then((response) => {
          if (response.ok) {
            isOk = true;
          } else {
            isOk = false;
          }
          return response.json(); 
        })
        .then((json) => {
          if (isOk) {
            setUser(json);
          }
        })
    }
  }, []);

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Context.Provider value={{ user: user,setUser: setUser }}>
          <RootRouter/>
        </Context.Provider>
      </BrowserRouter>
    </Provider>
  );
}

export default App;


