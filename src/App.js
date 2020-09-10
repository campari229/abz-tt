import React from 'react';
import './App.scss';

import { Header } from './components/Header/Header';
import { HeaderInfo } from './components/HeadInfo/HeadInfo';

function App() {
  return (
    <div className="App">
      <Header />
      <HeaderInfo />
    </div>
  );
}

export default App;
