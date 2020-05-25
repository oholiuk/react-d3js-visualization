import React from 'react';

function InfoPopup({ open, closeDialog }) {
  return (
    <div
      className='popup-wrap'
      style={{ display: open ? 'block' : 'none' }}
      onClick={() => closeDialog()}
    >
      <div className='popup popup--info' onClick={e => e.stopPropagation()}>
        <button className='popup__close-btn' onClick={() => closeDialog()}>
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
  );
}

export default InfoPopup;
