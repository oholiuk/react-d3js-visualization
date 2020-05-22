import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Tabletop from 'tabletop';

import { GoogleSheetsProvider } from './contexts/GoogleSheetsContext';
import Routes from './Routes';
import { Header, Footer } from './components';

function App() {
  const publicSpreadsheetUrl =
    'https://docs.google.com/spreadsheets/d/1ypM-P9GZgEJTGuKd3MQVObHOcbf6ojapgYGnFxbWrZ8/edit?usp=sharing';

  const [loading, setLoading] = useState(true);
  const [sheetsData, setSheetsData] = useState([]);

  useEffect(() => {
    Tabletop.init({
      key: publicSpreadsheetUrl,
      callback: getDataFromSheets,
      parseNumbers: true
    });

    function getDataFromSheets(sheetsData, tabletop) {
      setSheetsData(sheetsData);
      setLoading(false);
    }
  }, []);

  return (
    <Router>
      <Header />

      {!loading && (
        <GoogleSheetsProvider value={sheetsData}>
          <main className='main' id='main'>
            <Routes />
          </main>
        </GoogleSheetsProvider>
      )}

      <Footer />
    </Router>
  );
}

export default App;
