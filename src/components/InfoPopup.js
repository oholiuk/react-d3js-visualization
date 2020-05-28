import React, { useContext } from 'react';

import TranslationContext from '../contexts/TranslationContext';

function InfoPopup({ open, closeDialog }) {
  const { lang, data } = useContext(TranslationContext);

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
        <h3 className='popup__title'>{data && data.info_title}</h3>
        <div
          className='popup__content'
          dangerouslySetInnerHTML={{ __html: data && data.info_txt }}
        />
      </div>
    </div>
  );
}

export default InfoPopup;
