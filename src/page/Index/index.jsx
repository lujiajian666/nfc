import React from 'react';
import {
  Outlet,
  useLocation,
  useNavigate,
} from 'react-router-dom';
import less from './index.less';
import Header from './component/Header';
import RadioButton from '../../component/RadioButton';

function Index() {
  const location = useLocation();
  const navigate = useNavigate();
  const menus = [
    {
      active: location.pathname.includes('home'),
      className: [less['list-button']],
      icon: '#icon-home-new',
      title: 'Home page',
      pathname: '/home',
    },
    {
      active: location.pathname.includes('rank'),
      className: [less['list-button']],
      icon: '#icon-rankings',
      title: 'Ranking List',
      pathname: '/rank',
    },
    {
      active: false,
      className: [less['list-button']],
      icon: '#icon-discover-new',
      title: 'News',
    },
    {
      active: false,
      className: [less['list-button']],
      icon: '#icon-moments',
      title: 'Comments',
    },
  ];
  return (
    <>
      <Header />
      <div className={less.wrapper}>
        <ul className={less.menu}>
          {
          menus.map((item) => (
            <li
              key={item.icon}
              onClick={() => {
                if (item.pathname) {
                  navigate(item.pathname);
                }
              }}
            >
              <RadioButton
                active={item.active}
                txt={(
                  <div>
                    <svg className={['svg-icon', less.svg].join(' ')}><use xlinkHref={item.icon} /></svg>
                  &nbsp;
                    {item.title}
                  </div>
              )}
                className={item.className}
              />
            </li>
          ))
        }
        </ul>
        <div className={less.content}>
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default Index;
