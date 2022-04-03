import React from 'react';
import PropTypes from 'prop-types';
import less from './index.less';
import Point from '@/component/Point';

function GameItem({
  no, url, desc, name, className, onMouseOver,
}) {
  const allClass = [less.wrapper].concat(className);

  return (
    <div className={allClass.join(' ')} onMouseOver={onMouseOver} onFocus={() => undefined}>
      <p className={less.no}>
        No.
        {no}
      </p>
      <img className={less.icon} src={url} alt={desc} />
      <div className={less.desc}>
        <p className={less.name}>{name}</p>
        <Point point="8.1" className={less.point} />
        <div className={less.tag}>type1</div>
        <div className={less.tag}>type2</div>
        <div className={less.tag}>type2</div>
      </div>
    </div>
  );
}
GameItem.defaultProps = {
  no: 1,
  desc: '',
  name: '',
  className: [],
  onMouseOver: () => {},
};
GameItem.propTypes = {
  no: PropTypes.number,
  url: PropTypes.string.isRequired,
  desc: PropTypes.string,
  name: PropTypes.string,
  className: PropTypes.arrayOf(PropTypes.string),
  onMouseOver: PropTypes.func,
};
export default GameItem;
