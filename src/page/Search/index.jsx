import React, { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../Index/component/Header';
import less from './index.less';
import GameCard from '@/component/GameCard';
import game1Pic from '@/asset/img/game1.jpeg';
import Button from '@/component/Button';
import { ScrollTop } from '@/';

function Search() {
  const type = ['all', 'ACT', 'A-RPG', 'AVG', 'A-AVG'];
  const [currTab, setCurrTab] = useState('1');
  const [activeType, setActiveType] = useState(type[0]);
  const { word } = useParams();
  const [loading, setLoading] = useState(true);
  const onClickTab = useCallback((event) => {
    const { target } = event;
    if (!target) return;
    setCurrTab(target.dataset.key);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  return (
    <>
      <Header />
      <div className={less['search-page']}>
        <h2 className={less.title}>
          Search results for:
          {word}
        </h2>
        <ul className={less.tabs} onClick={onClickTab}>
          <li data-key="1" className={currTab === '1' ? less.active : ''}>games</li>
          <li data-key="2" className={currTab === '2' ? less.active : ''}>comments</li>
        </ul>
        <div className={less['type-button-area']}>
          {
            type.map((item) => (
              <Button
                onClick={() => {
                  setActiveType(item);
                }}
                active={activeType === item}
                txt={item}
                className={[less.button]}
              />
            ))
          }
          <Button
            txt={(
              <div className={less.icon}>
                <svg className="FilterDropdown_icon__2hOLf" width="18" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5.54471 9.70306L5.46314 2.64253L3.17802 2.64253L3.2596 9.70306L2.28007 9.70306C1.36162 9.70306 0.928952 10.8374 1.6141 11.449L3.65457 13.2707C4.03396 13.6094 4.60713 13.6094 4.98652 13.2707L7.02699 11.449C7.71214 10.8374 7.27948 9.70306 6.36102 9.70306L5.54471 9.70306Z" fill="white" />
                  <path d="M5.54471 9.70306L5.46314 2.14253L3.17802 2.14253L3.2596 9.70306L2.28007 9.70306C1.36162 9.70306 0.928952 10.8374 1.6141 11.449L3.65457 13.2707C4.03396 13.6094 4.60713 13.6094 4.98652 13.2707L7.02699 11.449C7.71214 10.8374 7.27948 9.70306 6.36102 9.70306L5.54471 9.70306Z" fill="white" />
                  <path d="M10.2085 6.16218L10.29 13.7227L12.5751 13.7227L12.4936 6.16218L13.4731 6.16218C14.3916 6.16218 14.8242 5.02787 14.1391 4.4162L12.0986 2.59456C11.7192 2.25586 11.146 2.25586 10.7667 2.59456L8.72618 4.4162C8.04103 5.02787 8.47369 6.16218 9.39215 6.16218L10.2085 6.16218Z" fill="white" />
                </svg>
                Sort By
                <div className={less['ico-down']}><svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg" data-test-id="undefined-arrow"><path d="M5.09073 6L0.681874 0.749999L9.49959 0.75L5.09073 6Z" fill="#B0B4B9" /></svg></div>
              </div>
          )}
            className={[less.sort]}
          />
        </div>
        <div className={less['result-box']}>
          {
            loading
              ? (
                <div className={less['loading-wrapper']}>
                  <div className={less.loading} />
                </div>
              )
              : (
                <>
                  <GameCard
                    className={less.card}
                    id={1}
                    name="AF-ZERO"
                    desc="Crypto.com is on a mission to accelerate the world’s transition to cryptocurrency. Through the Crypto.com Mobile App and Exchange, you can buy 150+ cryptocurrenc..."
                    url={game1Pic}
                  />
                  <GameCard
                    className={less.card}
                    id={1}
                    name="AF-ZERO"
                    desc="Crypto.com is on a mission to accelerate the world’s transition to cryptocurrency. Through the Crypto.com Mobile App and Exchange, you can buy 150+ cryptocurrenc..."
                    url={game1Pic}
                  />
                  <GameCard
                    className={less.card}
                    id={1}
                    name="AF-ZERO"
                    desc="Crypto.com is on a mission to accelerate the world’s transition to cryptocurrency. Through the Crypto.com Mobile App and Exchange, you can buy 150+ cryptocurrenc..."
                    url={game1Pic}
                  />
                </>
              )
          }
        </div>
      </div>
    </>
  );
}

export default ScrollTop(Search);
