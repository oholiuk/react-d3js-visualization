import React from 'react';

function InfoPopup() {
  return (
    <>
      <div className='screen screen--main'>
        <div className='language'>
          <a href='# ' className='language__i language__i--selected'>
            EN
          </a>
          <a href='# ' className='language__i'>
            FI
          </a>
        </div>

        <article className='intro'>
          <img
            src='assets/img/logo-en.svg'
            alt='Esports Champions'
            className='intor__logo'
          />

          <div className='intro__desc'>
            <p>
              With the League of Legends final drawing more viewers than the
              last game of the 2016 NBA Finals and total eSports prize pools
              exceeding $93 million; gaming has transformed from a pastime to a
              profession.
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

      <div className='popup-wrap'>
        <div className='popup popup--info'>
          <button className='popup__close-btn'>
            <i className='icon-close'></i>
          </button>
          <h3 className='popup__title'>Information</h3>
          <div className='popup__content'>
            <p>Champions of eSports is brought to you by Unibet. </p>
            <p>
              Viewership data has been sourced from{' '}
              <a
                target='_blank'
                href='https://www.statista.com/statistics/490480/global-esports-audience-size-viewer-type/'
                rel='noopener noreferrer'
              >
                Statista
              </a>
              .
            </p>
            <p>
              eSport player, game and country data has been sourced from{' '}
              <a
                target='_blank'
                href='http://www.esportsearnings.com/'
                rel='noopener noreferrer'
              >
                eSportsearnings
              </a>
              ,{' '}
              <a
                target='_blank'
                href='http://wiki.teamliquid.net/'
                rel='noopener noreferrer'
              >
                TeamLiquid
              </a>
              , Newzoo and Twitch.
            </p>
            <p>Population data is supplied by WorldBank.org.</p>
            <p>Information is up-to-date as of February 2017.</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default InfoPopup;
