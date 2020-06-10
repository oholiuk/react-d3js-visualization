import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import TranslationContext from '../contexts/TranslationContext';

function Main({ setLanguage }) {
  const { lang, data } = useContext(TranslationContext);
  const { pathname } = useLocation();
  const prePath = pathname.substr(0, pathname.lastIndexOf('/') + 1);

  return (
    <div className='screen screen--main'>
      <div className='language'>
        <a
          href={`${prePath}en`}
          className={
            lang === 'en' ? 'language__i language__i--selected' : 'language__i'
          }
        >
          EN
        </a>
        <a
          href={prePath}
          className={
            lang === 'fi' ? 'language__i language__i--selected' : 'language__i'
          }
        >
          FI
        </a>
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
