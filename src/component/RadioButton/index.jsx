import React from 'react';
import PropTypes from 'prop-types';
import less from './index.less';

function RadioButton({ txt, className, active }) {
  const allClass = [...className, less.button];
  if (active) {
    allClass.push(less.active);
  }
  const allClassString = allClass.join(' ');
  return (
    <button type="button" className={allClassString}>{txt}</button>
  );
}
RadioButton.defaultProps = {
  className: [],
  active: false,
};
RadioButton.propTypes = {
  active: PropTypes.bool,
  txt: PropTypes.element.isRequired,
  className: PropTypes.arrayOf(PropTypes.string),
};
export default RadioButton;
