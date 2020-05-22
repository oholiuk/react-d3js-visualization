import React from 'react';

function EmbedPopup2() {
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
        <div className='popup popup--embed'>
          <button className='popup__close-btn'>
            <i className='icon-close'></i>
          </button>
          <h3 className='popup__title'>Embed</h3>
          <div className='popup__content'>
            <p>
              To embed The Champions of eSports, simply copy the link below:
            </p>
            <div className='popup__buttons cf'>
              <button className='popup__button popup__button--1-2'>
                Embed Whole Piece
              </button>
              <button className='popup__button popup__button--1-2 popup__button--selected'>
                Embed Current Graph Only
              </button>
            </div>
            <input
              type='text'
              id='temp-id-textinput'
              readonly=''
              className='popup__embed-textinput'
              value='<div className="e-sports" style="border:1px solid #300;width:100%;height:700px;margin:0 auto;background:#fff;position:relative;"><iframe data-url="https://fi.unibet.com/hub/esports-mestarit/en" src="https://fi.unibet.com/hub/esports-mestarit/en" style="position:absolute;top:0;left:0;width:100%;height:100%; border:0;"></iframe></div><div className="meframe"></div><div><a href="https://fi.unibet.com/hub/esports-mestarit/en" target="_blank" style="cursor: pointer" >The Champions of eSports</a> </div><br/>'
            />
            <div className='popup__buttons cf'>
              <button
                className='popup__button popup__button--copy-btn'
                id='temp-id-ctc'
              >
                Copy To Clipboard
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default EmbedPopup2;
