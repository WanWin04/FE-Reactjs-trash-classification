import './header.css';
import { FaBars } from "react-icons/fa";


function Header() {

    const func = () => {
        const hiddenFunc = document.querySelector('.hidden-func');
        hiddenFunc.classList.toggle('show');
    }


    return (
        <div id="header">
            <div id="logo-zone">
                <button id="logo"><img src="#" alt="logo"></img></button>
            </div>
            <h2>XXXX</h2>
            <div id="func-head">
            <div>TRANG CHỦ</div>
            <div>ĐỐI TÁC</div>
            <div>TIN CMC</div>
            <div>CỔ ĐÔNG</div>
            <div>NGHỀ NGHIỆP</div>
            <div>VỀ CHÚNG TÔI</div>
            </div>
            <ul className="hidden-func">
                <li>TRANG CHỦ</li>
                <li>ĐỐI TÁC</li>
                <li>TIN CMC</li>
                <li>CỔ ĐÔNG</li>
                <li>NGHỀ NGHIỆP</li>
                <li>VỀ CHÚNG TÔI</li>
            </ul>
            <div id="mobile-func" onClick={func}>
                <i>
                    <FaBars/>
                    </i>
            </div>
            <button className="bton">Đăng nhập</button>
        </div>
    );
}

export default Header;