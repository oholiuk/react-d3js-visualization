import React, { useContext } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';

import TranslationContext from '../contexts/TranslationContext';

function EmbedPopup1({ open, closeDialog }) {
  const { data } = useContext(TranslationContext);
  const appUrl = window.location.href;
  const copyText = `<div className="e-sports" style="border:1px solid #300;width:100%;height:700px;margin:0 auto;background:#fff;position:relative;"><iframe data-url="${appUrl}" src="${appUrl}" style="position:absolute;top:0;left:0;width:100%;height:100%; border:0;"></iframe></div><div className="meframe"></div><div><a href="${appUrl}" target="_blank" style="cursor: pointer" >The Champions of eSports</a> </div><br/>`;

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
            <button className='popup__button popup__button--selected'>
              {data && data.embed_txt1}
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

export default EmbedPopup1;
