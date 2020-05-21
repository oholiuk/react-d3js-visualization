import React from 'react';

function Footer() {
  return (
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
      <div className='share__i share__i--info'>
        <i className='icon-info'></i>
      </div>
    </div>
  );
}

export default Footer;
