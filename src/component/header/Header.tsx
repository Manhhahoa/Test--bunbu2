import "./Header.scss";
import Study from "./header-onclick/Study";
import Notice from "./header-onclick/Notice";
import Profile from "./header-onclick/Profile";
import InputSearch from "./header-search/InputSearch";
const Header = () => {
    return (
        <div>
            <div className="header">
                <div className="header-image d-flex">
                    <img
                        src="https://fullstack.edu.vn/static/media/f8-icon.18cd71cfcfa33566a22b.png"
                        alt=""
                    />
                    <h4>Học Lập Trình Để Đi Làm</h4>
                </div>
                <InputSearch />
                <div className="header-signin d-flex">
                    <Study />
                    <Notice />
                    <Profile />
                </div>
            </div>

        </div>
    );
};

export default Header;
