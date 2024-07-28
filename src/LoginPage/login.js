import './login.css';
import { FaUser, FaLock, FaFacebookF } from 'react-icons/fa';
import { FcGoogle } from "react-icons/fc";
import { MdEmail } from "react-icons/md";
function logToRes() {
    const boxlog = document.querySelector('.login-box');
    boxlog.classList.add('active');
}
function resToLog() {
    const boxlog = document.querySelector('.login-box');
    boxlog.classList.remove('active');
}
function logToForgotPass() {
    const boxlog = document.querySelector('.login-box');
    boxlog.classList.add('active2');
}
function forgotPassToLog() {
    const boxlog = document.querySelector('.login-box');
    boxlog.classList.remove('active2');
}
function LoginPage() {
    return (
            <div id="page-body">
                <div id="main-bg"></div>
                <div className="login-box">
                    {/* login */}
                    <div className="form-box login">
                        <h2 className="animation" style={{'--i': 0, '--j':19}}>ĐĂNG NHẬP</h2>
                        <form action="#">
                            <div className="input-box animation" style={{'--i': 1, '--j':20}}>
                                <input type="text" required></input>
                                <label>Tên đăng nhập</label>
                                <i className='bx bxs-user'><FaUser /></i>
                            </div>
                            <div className="input-box animation" style={{'--i': 2, '--j':21}}>
                                <input type="password" required></input>
                                <label>Mật khẩu</label>
                                <i className='bx bxs-lock-alt' ><FaLock /></i>
                            </div>
                            <div className='forgot animation'  style={{'--i': 3, '--j':22}} onClick={logToForgotPass}>
                                Quên mật khẩu
                            </div>
                            <button type="submit" className="btn animation" style={{'--i': 3, '--j':22}}>Đăng nhập</button>
                            <div className="log-icon animation" style={{'--i': 3, '--j':22}}>
                                <label>Bạn muốn đăng nhập bằng: </label> 
                                <i className='bx bxs-lock-alt' ><FaFacebookF /></i>
                                <i className='bx bxs-lock-alt' ><FcGoogle  /></i>
                            </div>
                            <div className="logreg-link animation" style={{'--i': 4, '--j':23}}>
                                <p>Bạn chưa có tài khoản? <a href="#" className="register-link" onClick={logToRes}>Đăng ký</a></p>
                            </div>
                        </form>
                    </div>

                    {/* register */}
                    <div className="form-box register">
                        <h2 className="animation" style={{'--i':17, '--j':0}}>ĐĂNG KÝ</h2>
                        <form action="#">
                            <div className="input-box animation" style={{'--i':18, '--j':1}}>
                                <input type="text" required></input>
                                <label>Tên đăng nhập</label>
                                <i className='bx bxs-user'><FaUser /></i>
                            </div>
                            <div className="input-box animation" style={{'--i':19, '--j':2}}>
                                <input type="text" required></input>
                                <label>Email</label>
                                <i className='bx bxs-envelope' ><MdEmail /></i>
                            </div>
                            <div className="input-box animation" style={{'--i':20, '--j':3}}>
                                <input type="password" required></input>
                                <label>Mật khẩu</label>
                                <i className='bx bxs-lock-alt' ><FaLock /></i>
                            </div>
                            <div className="input-box animation" style={{'--i':20, '--j':3}}>
                                <input type="password" required></input>
                                <label>Nhập lại mật khẩu</label>
                                <i className='bx bxs-lock-alt' ><FaLock /></i>
                            </div>
                            <button type="submit" className="btn animation" style={{'--i':21, '--j':4}}>Đăng ký</button>
                            <div className="logreg-link animation" style={{'--i':22, '--j':5}}>
                                <p>Bạn đã có tài khoản? <a href="#" className="login-link" onClick={resToLog}>Đăng nhập</a></p>
                            </div>
                        </form>
                    </div>

                    {/* forgotpass */}

                    <div className='form-box forgotpass'>
                        <button type="submit" className="btn animation" style={{'--i':21, '--j':4}} onClick={forgotPassToLog}>Đăng ký</button>
                        {/* <button type="submit" className="btn animation" style={{'--i':21, '--j':4}}>Đăng ký</button>
                        <button type="submit" className="btn animation" style={{'--i':21, '--j':4}}>Đăng ký</button> */}
                    </div>
                </div>
            </div>
    );
}

export default LoginPage;