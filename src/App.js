import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Tabletop from 'tabletop';

import { TranslationProvider } from './contexts/TranslationContext';
import { VisualizationProvider } from './contexts/VisualizationContext';

import Routes from './Routes';
import { Header, Footer } from './components';
import { generateSiteData } from './utils/generateSiteData';
import { path } from 'd3';

function App() {
  const vizDataUrl =
    'https://docs.google.com/spreadsheets/d/1ypM-P9GZgEJTGuKd3MQVObHOcbf6ojapgYGnFxbWrZ8/edit?usp=sharing';
  const siteDataUrl =
    'https://docs.google.com/spreadsheets/d/1kBjk27IM-htqUmJhSCg87sJngFFL0Q1-nrjcAJC9hJ0/edit?usp=sharing';
  const defaultLanguage = 'fi';

  const [loading, setLoading] = useState(true);
  const [language, setLanguage] = useState(defaultLanguage);
  const [vizData, setVizData] = useState([]);
  const [sheetsData, setSheetsData] = useState();
  const [filteredData, setFilteredData] = useState();
  const pathname = window.location.pathname;
  const isEmbed = window.location.hash.slice(-6) === '|embed';

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
        simpleSheet: true,
        parseNumbers: true
      });

      function getSiteDataFromSheets(sheetsData, tabletop) {
        setSheetsData(sheetsData);
        setLoading(false);
      }
    }
  }, []);

  useEffect(() => {
    sheetsData && setFilteredData(generateSiteData(sheetsData, language));
  }, [language, sheetsData]);

  useEffect(() => {
    if (pathname !== '/' + language) {
      pathname === '/'
        ? setLanguage(defaultLanguage)
        : setLanguage(pathname.slice(1));
    }
  }, [pathname, language, setLanguage]);

  return (
    <Router>
      <TranslationProvider
        value={{
          lang: language,
          defaultLanguage: defaultLanguage,
          data: filteredData
        }}
      >
        {!isEmbed && <Header />}

        {!loading && (
          <VisualizationProvider value={vizData}>
            {isEmbed ? (
              <Routes setLanguage={lang => setLanguage(lang)} />
            ) : (
              <main className='main' id='main'>
                <Routes setLanguage={lang => setLanguage(lang)} />
              </main>
            )}
          </VisualizationProvider>
        )}

        <Footer />
      </TranslationProvider>
    </Router>
  );
}

export default App;
