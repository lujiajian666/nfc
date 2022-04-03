import React from 'react';
import PropTypes from 'prop-types';
import less from './index.less';

function Point({ point, className }) {
  const allClassName = [less.point].concat(className).join(' ');
  return (
    <span className={allClassName}>
      <svg className="svg-icon"><use xlinkHref="#icon-ico-star" /></svg>
      <span className={less.score}>{point}</span>
    </span>
  );
}

Point.defaultProps = {
  className: '',
};
Point.propTypes = {
  point: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default Point;
