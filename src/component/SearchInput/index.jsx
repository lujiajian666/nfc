import React from 'react';
import PropTypes from 'prop-types';
import less from './index.less';

function SearchInput({ onSearch }) {
  return (
    <input
      onKeyDown={(event) => {
        if (event.keyCode === 13) {
          onSearch(event.target.value);
        }
      }}
      className={less['search-box']}
      type="text"
      placeholder="Search"
    />
  );
}

SearchInput.defaultProps = {
  onSearch: () => undefined,
};
SearchInput.propTypes = {
  onSearch: PropTypes.func,
};
export default SearchInput;
