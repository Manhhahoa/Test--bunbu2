
import './App.css';
import Header from './header/Header';
import BannerSwiper from './page/banner_swiper/BannerSwiper';
import Selectionbar from './selection_bar/Selectionbar';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Selectionbar></Selectionbar>
      <BannerSwiper />
    </div>
  );
}

export default App;
