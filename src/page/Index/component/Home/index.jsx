import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import SwiperCore, { Autoplay, Pagination, Navigation } from 'swiper';
import less from './index.less';
import gameData from '@/asset/data/gameData';
import { ScrollTop } from '@/';
import GameCard from '@/component/GameCard';

SwiperCore.use([Autoplay, Pagination, Navigation]);

function Home() {
  const games = gameData;
  return (
    <>
      <p className={less.title}>Recommend Game</p>
      <Swiper
        className={less.swiper}
        spaceBetween={50}
        slidesPerView={1}
        loop
        autoplay
        navigation
        pagination={{ clickable: true }}
      >
        {
        games.map((game) => (
          <SwiperSlide key={game.id}>
            <div className={less.slide}>
              <img className={less.bg} alt={game.desc} src={game.url} />
              <div className={less.intro} />
              <div className={less.intro__title}>
                <p className={less.name}>{game.name}</p>
                <div style={{ fontSize: 0 }}>
                  <div className={less.icon}>
                    <img src={game.url} alt={game.desc} />
                  </div>
                  <div className={less.icon}>
                    <img src={game.url} alt={game.desc} />
                  </div>
                  <div className={less.icon}>
                    <img src={game.url} alt={game.desc} />
                  </div>
                </div>
                <p className={less.desc}>{game.desc}</p>
              </div>
            </div>
          </SwiperSlide>
        ))
      }
      </Swiper>
      <p className={less.title}>Hot Game!</p>
      <div className={less['game-area']}>
        {
        games.map((game) => (
          <GameCard
            id={game.id}
            desc={game.desc}
            name={game.name}
            url={game.url}
          />
        ))
      }
      </div>
    </>
  );
}
export default ScrollTop(Home);
