import React from 'react';
import './style.css';
import { Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Upcoming from './components/Upcoming'
import TopRated from './components/TopRated';
import Popular from './components/Popular';
import Search from './components/Search';
import Details from './components/DetailPage/Details';

export default function App() {
  const navRoutes = [
    { title: 'Top Rated', path: 'toprated', element: <TopRated />, isNav: true },
    { title: 'Upcoming', path: 'upcoming', element: <Upcoming />, isNav: true },
    { title: 'search', path: 'search', element: <Search />, isNav: true },
    { title: 'Popular', path: '/', element: <Popular /> },
    { title: 'Popular', path: 'popular', element: <Popular /> },
    { title: 'Detail', path: 'detail/:movieId', element: <Details /> },

  ];

  return (
    <>
      <Navbar />
      <Routes>
        {navRoutes.map((item, index) => (<Route key={index} path={item.path} element={item.element}></Route>))}

      </Routes>

    </>
  );
}
