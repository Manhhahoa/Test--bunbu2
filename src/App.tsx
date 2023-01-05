
import './App.css';
import Header from './header/Header';
import HomePage from './page/home/HomePage';
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import RouteStudy from './page/route study/RouteStudy';
import CoustList from './page/couse/CoustList';
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Header />} path='/'>
          <Route element={<HomePage />} path='/home'></Route>
          <Route element={<RouteStudy />} path='/study'></Route>
          <Route element={<CoustList />} path='/course'></Route>
        </Route>
        <Route path='*' element={<div>404</div>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
