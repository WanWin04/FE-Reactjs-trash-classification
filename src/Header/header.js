import './header.css';
function Header() {
    return (
        <div id="header">
            <div id="logo-zone">
            <button id="logo"><img src="#" alt="logo"></img></button>
            <h2>XXXXXXXXXX</h2>
            </div>
            <div id="func-head">
            <div>TRANG CHỦ</div>
            <div>ĐỐI TÁC</div>
            <div>TIN CMC</div>
            <div>CỔ ĐÔNG</div>
            <div>NGHỀ NGHIỆP</div>
            <div>VỀ CHÚNG TÔI</div>
            </div>
            <button className="btn">Đăng nhập</button>
        </div>
    );
}

export default Header;