import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Routes from './Routes';
import { Header, Footer } from './components';

function App() {
  return (
    <Router>
      <Header />

      <main className='main' id='main'>
        <Routes />
      </main>

      <Footer />
    </Router>
  );
}

export default App;
