import React, { useState } from 'react';
import InfoPopup from './InfoPopup';

function Footer() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className='share' id='share'>
        <a href='# ' className='share__i share__i--facebook'>
          <i className='icon-facebook'></i>
        </a>
        <a href='# ' className='share__i share__i--twitter'>
          <i className='icon-twitter'></i>
        </a>
        <div className='share__i share__i--code'>
          <i className='icon-code'></i>
        </div>
        <div className='share__i share__i--info' onClick={() => setOpen(true)}>
          <i className='icon-info'></i>
        </div>
      </div>

      <InfoPopup open={open} closeDialog={() => setOpen(false)} />
    </>
  );
}

export default Footer;
