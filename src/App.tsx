
import './App.css';
import Header from './header/Header';
import BannerSwiper from './page/banner_swiper/BannerSwiper';
import Selectionbar from './selection_bar/Selectionbar';
import { Routes, Route, BrowserRouter, Link } from 'react-router-dom'
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<div>
          <Link to={'/header'} > <button>Next</button></Link>
        </div>} path='/'>
        </Route>
        <Route element={<div>HOME</div>} path='/home'>
          <Route element={<p>ok</p>} path='/home/ok'></Route>
        </Route>
        <Route element={<Header />} path='/header'></Route>
        <Route element={<BannerSwiper />} path='/banner'></Route>
        <Route path='*' element={<div>404</div>}></Route>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
