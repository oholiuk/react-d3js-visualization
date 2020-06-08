import React, { useState, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { CopyToClipboard } from 'react-copy-to-clipboard';

import TranslationContext from '../contexts/TranslationContext';

function EmbedPopup2({ open, closeDialog }) {
  let location = useLocation();
  const { lang, defaultLanguage, data } = useContext(TranslationContext);
  const prefix = lang === defaultLanguage ? '' : lang;
  const [btnType, setBtnType] = useState('whole');

  const appUrl = 'https://kindred-esports-react.netlify.app/';
  const copyText =
    btnType === 'whole'
      ? `<div className="e-sports" style="border:1px solid #300;width:100%;height:700px;margin:0 auto;background:#fff;position:relative;"><iframe data-url="${appUrl}${prefix}" src="https://kindred-esports-react.netlify.app/${prefix}" style="position:absolute;top:0;left:0;width:100%;height:100%; border:0;"></iframe></div><div className="meframe"></div><div><a href="https://kindred-esports-react.netlify.app/${prefix}" target="_blank" style="cursor: pointer" >The Champions of eSports</a> </div><br/>`
      : `<div className="e-sports" style="border:1px solid #300;width:100%;height:700px;margin:0 auto;background:#fff;position:relative;"><iframe data-url="${appUrl}${prefix}${location.hash}|embed" src="${appUrl}${prefix}${location.hash}|embed" style="position:absolute;top:0;left:0;width:100%;height:100%; border:0;"></iframe></div><div className="meframe"></div><div><a href="https://kindred-esports-react.netlify.app/${prefix}" target="_blank" style="cursor: pointer" >The Champions of eSports</a> </div><br/>`;

  return (
    <div
      className='popup-wrap'
      style={{ display: open ? 'block' : 'none' }}
      onClick={() => closeDialog()}
    >
      <div className='popup popup--embed' onClick={e => e.stopPropagation()}>
        <button className='popup__close-btn' onClick={() => closeDialog()}>
          <i className='icon-close'></i>
        </button>
        <h3 className='popup__title'>{data && data.embed_title}</h3>
        <div className='popup__content'>
          <p>{data && data.embed_desc}</p>
          <div className='popup__buttons cf'>
            <button
              className={
                btnType === 'whole'
                  ? 'popup__button popup__button--1-2 popup__button--selected'
                  : 'popup__button popup__button--1-2'
              }
              onClick={() => setBtnType('whole')}
            >
              {data && data.embed_txt1}
            </button>
            <button
              className={
                btnType === 'graph'
                  ? 'popup__button popup__button--1-2 popup__button--selected'
                  : 'popup__button popup__button--1-2'
              }
              onClick={() => setBtnType('graph')}
            >
              {data && data.embed_txt3}
            </button>
          </div>
          <input
            type='text'
            id='temp-id-textinput'
            readOnly={true}
            className='popup__embed-textinput'
            value={copyText}
          />
          <div className='popup__buttons cf'>
            <CopyToClipboard text={copyText}>
              <button
                className='popup__button popup__button--copy-btn'
                id='temp-id-ctc'
              >
                {data && data.embed_txt2}
              </button>
            </CopyToClipboard>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EmbedPopup2;
