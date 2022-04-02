import React from 'react';
import less from './index.less';

function RadioSearchInput() {
  return (
    <input
      className={less['search-box']}
      type="text"
      placeholder="Search"
    />
  );
}
export default RadioSearchInput;
