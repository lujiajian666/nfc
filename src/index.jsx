import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import Index from './page/Index';
import Login from './page/Login';
import Home from './page/Index/component/Home';
import RankList from './page/Index/component/RankList';

// eslint-disable-next-line
export function ScrollTop(Component) {
  return function () {
    // eslint-disable-next-line
    document.body.scrollTop = document.documentElement.scrollTop = 0;
    return <Component />;
  };
}

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />}>
          <Route path="home" element={<Home />} />
          <Route path="rank" element={<RankList />} />
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);
