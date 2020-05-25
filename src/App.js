import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Tabletop from 'tabletop';

import { LanguageProvider } from './contexts/LanguageContext';
import { GoogleSheetsProvider } from './contexts/GoogleSheetsContext';

import { Header, Footer } from './components';
import Routes from './Routes';

function App() {
  const publicSpreadsheetUrl =
    'https://docs.google.com/spreadsheets/d/1ypM-P9GZgEJTGuKd3MQVObHOcbf6ojapgYGnFxbWrZ8/edit?usp=sharing';

  const [loading, setLoading] = useState(true);
  const [language, setLanguage] = useState('en');
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
      <LanguageProvider value={language}>
        <Header />

        {!loading && (
          <GoogleSheetsProvider value={sheetsData}>
            <main className='main' id='main'>
              <Routes setLanguage={lang => setLanguage(lang)} />
            </main>
          </GoogleSheetsProvider>
        )}

        <Footer />
      </LanguageProvider>
    </Router>
  );
}

export default App;
