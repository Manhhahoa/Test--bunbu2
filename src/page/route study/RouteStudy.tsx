import Selectionbar from '../../selection_bar/Selectionbar'
import '../.././css/cssRouteStudy/RouteStudy.scss'
const RouteStudy = () => {
    return (
        <div >
            <Selectionbar />
            <div className='route-study'>
                <h1>Lộ trình học Front-end</h1>
                <div>
                    <p>Hầu hết các websites hoặc ứng dụng di động đều có 2 phần là Front-end và Back-end. Front-end là phần giao diện người dùng nhìn thấy và có thể tương tác, đó chính là các ứng dụng mobile hay những website bạn đã từng sử dụng. Vì vậy, nhiệm vụ của lập trình viên Front-end là xây dựng các giao diện đẹp, dễ sử dụng và tối ưu trải nghiệm người dùng.</p>
                    <p>Tại Việt Nam, <strong style={{ color: 'red' }} >lương trung bình</strong> cho lập trình viên front-end vào khoảng <strong>16.000.000đ</strong></p>
                    <p>Dưới đây là các khóa học F8 đã tạo ra dành cho bất cứ ai theo đuổi sự nghiệp trở thành một lập trình viên Front-end.</p>
                </div>
                <p>Các khóa học có thể chưa đầy đủ, F8 vẫn đang nỗ lực hoàn thiện trong thời gian sớm nhất.</p>
            </div>
        </div>
    )
}

export default RouteStudy
