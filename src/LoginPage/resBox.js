import './login.css';
import { FaUser, FaLock } from 'react-icons/fa';
import { MdEmail } from "react-icons/md";
import { LogAndReg } from './goto';
function resBox() {
    return (
        <div className="form-box register">
                        <h2 className="animation" style={{'--i':10, '--j':0}}>ĐĂNG KÝ</h2>
                        <form action="#">
                            <div className="input-box animation" style={{'--i':11, '--j':1}}>
                                <input type="text" required></input>
                                <label>Tên đăng nhập</label>
                                <i className='bx bxs-user'><FaUser /></i>
                            </div>
                            <div className="input-box animation" style={{'--i':12, '--j':2}}>
                                <input type="text" required></input>
                                <label>Email</label>
                                <i className='bx bxs-envelope' ><MdEmail /></i>
                            </div>
                            <div className="input-box animation" style={{'--i':13, '--j':3}}>
                                <input type="password" required></input>
                                <label>Mật khẩu</label>
                                <i className='bx bxs-lock-alt' ><FaLock /></i>
                            </div>
                            <div className="input-box animation" style={{'--i':14, '--j':3}}>
                                <input type="password" required></input>
                                <label>Nhập lại mật khẩu</label>
                                <i className='bx bxs-lock-alt' ><FaLock /></i>
                            </div>
                            <button type="submit" className="btn animation" style={{'--i':15, '--j':4}}>Đăng ký</button>
                            <div className="logreg-link animation" style={{'--i':16, '--j':5}}>
                                <p>Bạn đã có tài khoản? <a href="#" className="login-link" onClick={LogAndReg}>Đăng nhập</a></p>
                            </div>
                        </form>
                    </div>
    );
}

export default resBox;