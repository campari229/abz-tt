import React from 'react';
import './App.scss';

import { Header } from './components/Header/Header';
import { HeaderInfo } from './components/HeadInfo/HeadInfo';
import { Acquaintance } from './components/Acquaintance/Acquaintance';
import { Users } from './components/Users/Users';

function App() {
  return (
    <div className="App">
      <Header />
      <HeaderInfo />
      <Acquaintance />
      <Users />
    </div>
  );
}

export default App;
