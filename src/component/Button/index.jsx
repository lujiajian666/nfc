import React from 'react';
import PropTypes from 'prop-types';
import less from './index.less';

function Button({
  txt, className, active, onClick,
}) {
  const allClass = [...className, less.button];
  if (active) {
    allClass.push(less.active);
  }
  const allClassString = allClass.join(' ');
  return (
    <button type="button" onClick={onClick} className={allClassString}>{txt}</button>
  );
}
Button.defaultProps = {
  className: [],
  active: false,
  onClick: () => undefined,
};
Button.propTypes = {
  active: PropTypes.bool,
  txt: PropTypes.element.isRequired,
  className: PropTypes.arrayOf(PropTypes.string),
  onClick: PropTypes.func,
};
export default Button;
