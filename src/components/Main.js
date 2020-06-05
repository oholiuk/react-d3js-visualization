import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import TranslationContext from '../contexts/TranslationContext';

function Main({ setLanguage }) {
  const { lang, data } = useContext(TranslationContext);

  return (
    <div className='screen screen--main'>
      <div className='language'>
        <Link
          to='/en'
          className={
            lang === 'en' ? 'language__i language__i--selected' : 'language__i'
          }
          onClick={() => setLanguage('en')}
        >
          EN
        </Link>
        <Link
          to='/'
          className={
            lang === 'fi' ? 'language__i language__i--selected' : 'language__i'
          }
          onClick={() => setLanguage('fi')}
        >
          FI
        </Link>
      </div>

      <article className='intro'>
        <img
          src={data && data.logo}
          alt={data && data.logo_alt}
          className='intro__logo'
        />

        <div className='intro__desc'>
          <p>{data && data.main_desc1}</p>
          <p>{data && data.main_desc2}</p>
          <p>{data && data.main_desc3}</p>
        </div>
      </article>
    </div>
  );
}

export default Main;
