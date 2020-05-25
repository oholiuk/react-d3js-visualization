import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Tabletop from 'tabletop';

import { LanguageProvider } from './contexts/LanguageContext';
import { VisualizationProvider } from './contexts/VisualizationContext';

import { Header, Footer } from './components';
import Routes from './Routes';

function App() {
  const vizDataUrl =
    'https://docs.google.com/spreadsheets/d/1ypM-P9GZgEJTGuKd3MQVObHOcbf6ojapgYGnFxbWrZ8/edit?usp=sharing';

  const [loading, setLoading] = useState(true);
  const [language, setLanguage] = useState('en');
  const [vizData, setVizData] = useState([]);
  const [siteData, setSiteData] = useState([]);

  useEffect(() => {
    Tabletop.init({
      key: vizDataUrl,
      callback: getDataFromSheets,
      parseNumbers: true
    });

    function getDataFromSheets(vizData, tabletop) {
      setVizData(vizData);
      setLoading(false);
    }
  }, []);

  return (
    <Router>
      <LanguageProvider value={language}>
        <Header />

        {!loading && (
          <VisualizationProvider value={vizData}>
            <main className='main' id='main'>
              <Routes setLanguage={lang => setLanguage(lang)} />
            </main>
          </VisualizationProvider>
        )}

        <Footer />
      </LanguageProvider>
    </Router>
  );
}

export default App;
