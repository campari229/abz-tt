import React from 'react';
import './App.scss';

import { Header } from './components/Header/Header';
import { HeaderInfo } from './components/HeadInfo/HeadInfo';
import { Acquaintance } from './components/Acquaintance/Acquaintance';
import { Users } from './components/Users/Users';
import { Registration } from './components/Registration/Registration';

function App() {
  return (
    <div className="App">
      <Header />
      <HeaderInfo />
      <Acquaintance />
      <Users />
      <Registration />
    </div>
  );
}

export default App;
