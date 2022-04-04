import React from 'react';
import PropTypes from 'prop-types';
import less from './index.less';
import Point from '../Point';

function GameCard({
  id, url, desc, name, className,
}) {
  const allClass = [less['game-card']].concat(className);
  return (
    <div key={id} className={allClass.join(' ')}>
      <div className={less['img-wrapper']}>
        <img src={url} alt={desc} />
      </div>
      <div className={less.desc}>
        <div className={less['type-and-point']}>
          <span className={less.tag}>tag1</span>
          <span className={less.tag}>tag2</span>
          <span className={less.tag}>tag3</span>
          <Point className={less.point} point="7.0" />
        </div>
        <p className={less['game-name']}>{name}</p>
        <p className={less['game-desc']}>{desc}</p>
      </div>
    </div>
  );
}
GameCard.defaultProps = {
  className: '',
};
GameCard.propTypes = {
  id: PropTypes.oneOf([PropTypes.string, PropTypes.number]).isRequired,
  url: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  className: PropTypes.string,
};
export default GameCard;
