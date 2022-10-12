import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { Header } from './components/Header';
import { RootRouter } from './router';

function App() {
  return (
    <BrowserRouter>
      <RootRouter/>
    </BrowserRouter>
    
  );
}

export default App;
