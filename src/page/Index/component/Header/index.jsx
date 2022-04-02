import React from 'react';
import RadioSearchInput from '../../../../component/RadioSearchInput';
import less from './index.less';

function Header() {
  return (
    <div className={less.header}>
      <img width="136px" height="28px" alt="" src="https://crypto.com/static/cae522dc778b83946d0bbe0ee927090c/8d5b4/white.png" />
      <RadioSearchInput />
      <div className={less.sign}>
        <span>Sign In</span>
        <span>Sign Up</span>
      </div>
    </div>
  );
}

export default Header;
