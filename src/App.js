import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Tabletop from 'tabletop';

import { TranslationProvider } from './contexts/TranslationContext';
import { VisualizationProvider } from './contexts/VisualizationContext';

import Routes from './Routes';
import { Header, Footer } from './components';
import { generateSiteData } from './utils/generateSiteData';
import './scss/app.scss';

function App() {
  const vizDataUrl =
    'https://docs.google.com/spreadsheets/d/1ypM-P9GZgEJTGuKd3MQVObHOcbf6ojapgYGnFxbWrZ8/edit?usp=sharing';
  const siteDataUrl =
    'https://docs.google.com/spreadsheets/d/1kBjk27IM-htqUmJhSCg87sJngFFL0Q1-nrjcAJC9hJ0/edit?usp=sharing';

  const [loading, setLoading] = useState(true);
  const [language, setLanguage] = useState('en');
  const [vizData, setVizData] = useState([]);
  const [siteData, setSiteData] = useState();
  const [filteredData, setFilteredData] = useState();

  useEffect(() => {
    Tabletop.init({
      key: vizDataUrl,
      callback: getVizDataFromSheets,
      parseNumbers: true
    });

    function getVizDataFromSheets(vizData, tabletop) {
      setVizData(vizData);

      Tabletop.init({
        key: siteDataUrl,
        callback: getSiteDataFromSheets,
        parseNumbers: true
      });

      function getSiteDataFromSheets(sheetsData, tabletop) {
        const siteData = generateSiteData(sheetsData);

        setSiteData(siteData);
        setLoading(false);
      }
    }
  }, []);

  useEffect(() => {
    siteData && setFilteredData(siteData[language]);
  }, [language, siteData]);

  return (
    <Router>
      <TranslationProvider value={{ lang: language, data: filteredData }}>
        <Header />

        {!loading && (
          <VisualizationProvider value={vizData}>
            <main className='main' id='main'>
              <Routes setLanguage={lang => setLanguage(lang)} />
            </main>
          </VisualizationProvider>
        )}

        <Footer />
      </TranslationProvider>
    </Router>
  );
}

export default App;
