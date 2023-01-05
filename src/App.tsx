
import './App.css';
import HomePage from './page/home/HomePage';
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import RouteStudy from './page/route study/RouteStudy';
import CoustList from './page/couse/CoustList';
import Layout from './selection_bar/Layout';
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />} path='/' >
          <Route element={<HomePage />} path='/'></Route>
          <Route element={<RouteStudy />} path='/study'></Route>
          <Route element={<CoustList />} path='/course'></Route>
        </Route>
        <Route path='*' element={<div>404</div>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
