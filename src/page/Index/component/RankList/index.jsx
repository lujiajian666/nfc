import React, { useCallback, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import less from './index.less';
import GameItem from './component/GameItem';
import gameData from '@/asset/data/gameData';
import { ScrollTop } from '@/';

function RankList() {
  const menu = [
    { name: 'RankA', id: 'A' },
    { name: 'RankB', id: 'B' },
    { name: 'RankC', id: 'C' },
    { name: 'RankD', id: 'D' },
    { name: 'RankE', id: 'E' },
  ];
  const games = gameData;

  const [currentTab, setCurrentTab] = useState(menu[0].id);
  const [swiper, setSwiper] = useState();
  const [currGame, setCurrGame] = useState(games[0]);
  const [activeIndex, setActiveIndex] = useState(0);
  const onChooseGame = useCallback((game, index) => {
    setCurrGame(game);
    setActiveIndex(index);
  }, []);
  const onClickMenu = useCallback((event) => {
    const { target } = event;
    if (!target) return;
    swiper.slideTo(target.dataset.index);
    setCurrentTab(target.dataset.key);
    onChooseGame(games[0], 0);
  }, [swiper, onChooseGame, games]);

  return (
    <div className={less['rank-wrapper']}>
      <div className={less['game-list']}>
        <div className={less['menu-wrapper']}>
          <ul className={less.menu} onClick={onClickMenu}>
            {
          menu.map((item, index) => (
            <li
              key={item.id}
              data-key={item.id}
              data-index={index}
              className={currentTab === item.id ? less.active : ''}
            >
              {item.name}
            </li>
          ))
        }
          </ul>
        </div>
        <Swiper
          className={less.swiper}
          spaceBetween={50}
          slidesPerView={1}
          loop
          onSwiper={(instance) => setSwiper(instance)}
        >
          {menu.map((item) => (
            <SwiperSlide key={item.id}>
              {
                games.map((game, index) => (
                  <GameItem
                    key={game.id}
                    onMouseOver={() => {
                      onChooseGame(game, index);
                    }}
                    no={index + 1}
                    desc={game.desc}
                    url={game.url}
                    name={game.name}
                    className={[less['game-item'], activeIndex === index ? less.active : '']}
                  />
                ))
              }
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className={less['game-detail']}>
        <div className={less.img}>
          <img src={currGame.url} alt={currGame.desc} />
        </div>
        <p className={less.title}>{currGame.name}</p>
        <p className={less.desc}>{currGame.desc}</p>
      </div>
    </div>
  );
}
export default ScrollTop(RankList);
