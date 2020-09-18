import React from 'react';
import './App.scss';

import { Header } from './components/Header/Header';
import { HeaderInfo } from './components/HeadInfo/HeadInfo';
import { Acquaintance } from './components/Acquaintance/Acquaintance';
import { Users } from './components/Users/Users';
import { Registration } from './components/Registration/Registration';
import { Footer } from './components/Footer/Footter';
import { MobileNavigation } from './components/MobileNavigation/MobileNavigation';

function App() {
  return (
    <div className="App">
      <Header />
      <HeaderInfo />
      <Acquaintance />
      <Users />
      <Registration />
      <Footer />
      <MobileNavigation />
    </div>
  );
}

export default App;
