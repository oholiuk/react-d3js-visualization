import React, { useContext } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';

import TranslationContext from '../contexts/TranslationContext';

function EmbedPopup1({ open, closeDialog }) {
  const t = useContext(TranslationContext);
  const copyText = `<div className="e-sports" style="border:1px solid #300;width:100%;height:700px;margin:0 auto;background:#fff;position:relative;"><iframe data-url="https://kindred-esports-react.netlify.app/${t.lang}" src="https://kindred-esports-react.netlify.app/${t.lang}" style="position:absolute;top:0;left:0;width:100%;height:100%; border:0;"></iframe></div><div className="meframe"></div><div><a href="https://kindred-esports-react.netlify.app/${t.lang}" target="_blank" style="cursor: pointer" >The Champions of eSports</a> </div><br/>`;

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
        <h3 className='popup__title'>Embed</h3>
        <div className='popup__content'>
          <p>To embed The Champions of eSports, simply copy the link below:</p>
          <div className='popup__buttons cf'>
            <button className='popup__button popup__button--selected'>
              Embed Whole Piece
            </button>
          </div>
          <input
            type='text'
            id='temp-id-textinput'
            readOnly=''
            className='popup__embed-textinput'
            defaultValue={copyText}
          />
          <div className='popup__buttons cf'>
            <CopyToClipboard text={copyText}>
              <button
                className='popup__button popup__button--copy-btn'
                id='temp-id-ctc'
              >
                Copy To Clipboard
              </button>
            </CopyToClipboard>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EmbedPopup1;
