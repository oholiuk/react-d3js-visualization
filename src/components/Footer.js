import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

import EmbedPopup1 from './EmbedPopup1';
import EmbedPopup2 from './EmbedPopup2';
import InfoPopup from './InfoPopup';

function Footer() {
  const [infoDialogOpen, setInfoDialogOpen] = useState(false);
  const [embedDialogOpen, setEmbedDialogOpen] = useState(false);
  let location = useLocation();

  return (
    <>
      <div className='share' id='share'>
        <a href='# ' className='share__i share__i--facebook'>
          <i className='icon-facebook'></i>
        </a>
        <a href='# ' className='share__i share__i--twitter'>
          <i className='icon-twitter'></i>
        </a>
        <div
          className='share__i share__i--code'
          onClick={() => setEmbedDialogOpen(true)}
        >
          <i className='icon-code'></i>
        </div>
        <div
          className='share__i share__i--info'
          onClick={() => setInfoDialogOpen(true)}
        >
          <i className='icon-info'></i>
        </div>
      </div>

      <InfoPopup
        open={infoDialogOpen}
        closeDialog={() => setInfoDialogOpen(false)}
      />
      {location.hash ? (
        <EmbedPopup2
          open={embedDialogOpen}
          closeDialog={() => setEmbedDialogOpen(false)}
        />
      ) : (
        <EmbedPopup1
          open={embedDialogOpen}
          closeDialog={() => setEmbedDialogOpen(false)}
        />
      )}
    </>
  );
}

export default Footer;
