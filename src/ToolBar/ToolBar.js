import './ToolBar.css';
import UserIcon from './images/user.png';
import { FaBars } from "react-icons/fa";

function ToolBar(){
    const show = ()=>{
        const hiddenfunc = document.querySelector('.hidden-bar');
        hiddenfunc.classList.toggle('show');
    }
    return (
        <div className="toolbar">
            <div className="logo-zone">
                <button id="logo"><img src="#" alt="logo"></img></button>
            </div>
            <h2>XXXX</h2>
            <div className='func-bar'>
                <ul>
                    <li>Trang chủ</li>
                    <li>BLOG</li>
                    <li>CLASSIFIER</li>
                    <li>GAME</li>
                    <li>STORE</li>
                </ul>
            </div>
            {/* <div className='login-btn'>
                <button className='btn'>ĐĂNG NHẬP</button>
            </div> */}
            <div className='hidden-bar'>
                <ul>
                    <li>Trang chủ</li>
                    <li>BLOG</li>
                    <li>CLASSIFIER</li>
                    <li>GAME</li>
                    <li>STORE</li>
                </ul>
            </div>
            <div className='hidden-icon' onClick={show}>
                <i><FaBars/></i>
            </div>
            <div className='user-zone'>
                <div className='user-avatar'><img src={UserIcon}></img></div>
                <div className='user-name'>nguyen van a</div>
            </div>
        </div>
    );
}

export default ToolBar;