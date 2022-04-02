import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import SwiperCore, { Autoplay, Pagination, Navigation } from 'swiper';
import game1Pic from '../../../../asset/img/game1.jpeg';
import game2Pic from '../../../../asset/img/game2.jpeg';
import game3Pic from '../../../../asset/img/game3.jpeg';
import less from './index.less';

SwiperCore.use([Autoplay, Pagination, Navigation]);

function Home() {
  const games = [{
    id: 1,
    url: game1Pic,
    desc: 'af dfj af akfno di gdkjg, agood game desc!!!',
    name: 'game1',
  },
  {
    id: 2,
    url: game2Pic,
    desc: 'a fafjakg ajakf is oa ag adddf good game desc!!!',
    name: 'game2',
  },
  {
    id: 3,
    url: game3Pic,
    desc: 'good game desc!!!',
    name: 'game3 asdfj',
  },
  {
    id: 4,
    url: game1Pic,
    desc: 'af df afkagh akshka adjf  good game desc!!!',
    name: 'game4 df',
  },
  {
    id: 5,
    url: game2Pic,
    desc: 'good game desc!!!',
    name: 'game1',
  },
  {
    id: 6,
    url: game3Pic,
    desc: 'good game desc!!!',
    name: 'game1',
  }];
  return (
    <>
      <p className={less.title}>Recommend Game</p>
      <Swiper
        className={less.swiper}
        spaceBetween={50}
        slidesPerView={1}
        loop
        // autoplay
        navigation
        pagination={{ clickable: true }}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {
        games.map((game) => (
          <SwiperSlide key={game.id}>
            <div className={less.slide}>
              <img alt={game.desc} src={game.url} />
              <div className={less.intro} />
              <div className={less.intro__title}>
                <p>{game.name}</p>
                <p>{game.desc}</p>
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
          <div key={game.id} className={less['game-card']}>
            <div className={less['img-wrapper']}>
              <img src={game.url} alt={game.desc} />
            </div>
            <div className={less.desc}>
              <div className={less['type-and-point']}>
                <span>tag1</span>
                <span>tag2</span>
                <span>tag3</span>
                <span className={less.point}>
                  <svg className="svg-icon"><use xlinkHref="#icon-ico-star" /></svg>
                  7.0
                </span>
              </div>
              <p className={less['game-name']}>{game.name}</p>
              <p className={less['game-desc']}>{game.desc}</p>
            </div>
          </div>
        ))
      }
      </div>
    </>
  );
}
export default Home;
