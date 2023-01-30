import './App.css';
import HomePage from './page/home/HomePage';
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import RouteStudy from './page/route study/RouteStudy';
import CoustList from './page/couse/CoustList';
import Layout from './component/selection_bar/Layout';
import SignIn from './page/sign-in/SignIn';
import PrivateRoute from './router/PrivateRoute';
import SignUp from './page/sign-up/SignUp';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/sign-up' element={<SignUp />} />
        <Route element={<SignIn />} path='sign-in'></Route>
        <Route
          path='/'
          element={<PrivateRoute>
            <Layout />
          </PrivateRoute>}
        >
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
