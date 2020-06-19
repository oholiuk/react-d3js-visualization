import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import * as d3 from 'd3';

import { TranslationProvider } from './contexts/TranslationContext';

import Routes from './Routes';
import { Header, Footer } from './components';
import { generateSiteData } from './utils/generateSiteData';

function App() {
  const csvFilePath = 'data/language.csv';
  const defaultLanguage = 'fi';

  const [loading, setLoading] = useState(true);
  const [language, setLanguage] = useState(defaultLanguage);
  const [sheetsData, setSheetsData] = useState();
  const [filteredData, setFilteredData] = useState();
  const pathname = window.location.pathname;
  const lastPath = pathname.substr(pathname.lastIndexOf('/') + 1);
  const isEmbed = window.location.hash.slice(-6) === '|embed';

  useEffect(() => {
    d3.csv(csvFilePath).then(data => {
      setSheetsData(data);
      setLoading(false);
    });
  }, []);

  useEffect(() => {
    sheetsData && setFilteredData(generateSiteData(sheetsData, language));
  }, [language, sheetsData]);

  useEffect(() => {
    if (lastPath !== language) {
      lastPath !== 'en' ? setLanguage(defaultLanguage) : setLanguage(lastPath);
    }
  }, [lastPath, language, setLanguage]);

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

        {!loading &&
          (isEmbed ? (
            <Routes setLanguage={lang => setLanguage(lang)} />
          ) : (
            <main className='main' id='main'>
              <Routes setLanguage={lang => setLanguage(lang)} />
            </main>
          ))}

        <Footer />
      </TranslationProvider>
    </Router>
  );
}

export default App;
