import { Navigation, Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import '../.././css/cssSwiper/BarnerSwiper.scss'

const BannerSwiper = () => {
    return (
        <div className='barner'>
            <Swiper
                loop={true}
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper6"
            >
                <SwiperSlide>
                    <img src="https://files.fullstack.edu.vn/f8-prod/banners/Banner_03_youtube.png" alt="" />

                </SwiperSlide>


            </Swiper>
        </div>
    );
};
export default BannerSwiper