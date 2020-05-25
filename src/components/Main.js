import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import TranslationContext from '../contexts/TranslationContext';

function Main({ setLanguage }) {
  const t = useContext(TranslationContext);

  return (
    <div className='screen screen--main'>
      <div className='language'>
        <Link
          to='en'
          className={
            t.lang === 'en'
              ? 'language__i language__i--selected'
              : 'language__i'
          }
          onClick={() => setLanguage('en')}
        >
          EN
        </Link>
        <Link
          to='fi'
          className={
            t.lang === 'fi'
              ? 'language__i language__i--selected'
              : 'language__i'
          }
          onClick={() => setLanguage('fi')}
        >
          FI
        </Link>
      </div>

      <article className='intro'>
        <img
          src='assets/img/logo-en.svg'
          alt='Esports Champions'
          className='intor__logo'
        />

        <div className='intro__desc'>
          <p>
            With the League of Legends final drawing more viewers than the last
            game of the 2016 NBA Finals and total eSports prize pools exceeding
            $93 million; gaming has transformed from a pastime to a profession.
          </p>
          <p>
            For the elite, competitive gaming has become a profitable career,
            but what makes these players stand out in a league of their own?
            Discover just how much these gamers earn, where they’re from and
            more in The Champions of eSports.
          </p>
        </div>
      </article>
    </div>
  );
}

export default Main;
