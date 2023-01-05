import { Navigation, Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import '../.././css/csshome/HomePage.scss'
import Selectionbar from '../../selection_bar/Selectionbar';

const HomePage = () => {
    return (
        <div className='d-flex home-page' >
            <Selectionbar />
            <div className='barner w-100'>
                <Swiper
                    loop={true}
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        delay: 3000,
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
                        <div className='d-flex page-slice boder-us10 slice1' >
                            <div className='slice-text' >
                                <h2>Học ReactJS Miễn Phí!</h2>
                                <p>Khóa học ReactJS từ cơ bản tới nâng cao. Kết quả của khóa học này là bạn có thể làm hầu hết các dự án thường gặp với ReactJS.</p>
                            </div>
                            <div>
                                <img src="https://files.fullstack.edu.vn/f8-prod/banners/Banner_03_youtube.png" alt="" />
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='d-flex page-slice boder-us10 slice2' >
                            <div className='slice-text' >
                                <h2>Khóa học HTML CSS Pro</h2>
                                <p>Đây là khóa học đầy đủ và chi tiết nhất bạn có thể tìm thấy được ở trên Internet!</p>
                            </div>
                            <div>
                                <img src="https://files.fullstack.edu.vn/f8-prod/banners/20/6308a6bf603a4.png" alt="" />
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>

            </div>
        </div>

    );
};
export default HomePage
