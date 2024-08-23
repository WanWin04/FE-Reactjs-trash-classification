import './login.css';
import { FaUser, FaLock, FaFacebookF } from 'react-icons/fa';
import { FcGoogle } from "react-icons/fc";
import { MdEmail } from "react-icons/md";

function LoginPage() {
    const func = () => {
        const hiddenFunc = document.querySelector('.hidden-func');
        if(hiddenFunc.classList.contains('show')){
            hiddenFunc.classList.remove('show');
        }
    }
    const LogAndReg = () => {
        const boxlog = document.querySelector('.login-box');
        boxlog.classList.toggle('active');
    }
    const LogAnd4got = () => {
        const boxlog = document.querySelector('.login-box');
        boxlog.classList.toggle('active2');
    }

    return (
            <div id="page-body" onClick={func}>
                <div id="main-bg"></div>
                <div className="login-box">
                    {/* login */}
                    <div className="form-box login">
                        <h2 className="animation" style={{'--i': 0, '--j':10}}>ĐĂNG NHẬP</h2>
                        <form action="#">
                            <div className="input-box animation" style={{'--i': 1, '--j':11}}>
                                <input type="text" required></input>
                                <label>Tên đăng nhập</label>
                                <i className='bx bxs-user'><FaUser /></i>
                            </div>
                            <div className="input-box animation" style={{'--i': 2, '--j':12}}>
                                <input type="password" required></input>
                                <label>Mật khẩu</label>
                                <i className='bx bxs-lock-alt' ><FaLock /></i>
                            </div>
                            <div className='forgot animation'  style={{'--i': 3, '--j':13}} onClick={LogAnd4got}>
                                Quên mật khẩu
                            </div>
                            <button type="submit" className="btn animation" style={{'--i': 3, '--j':14}}>Đăng nhập</button>
                            <div className="log-icon animation" style={{'--i': 3, '--j':15}}>
                                <label>Bạn muốn đăng nhập bằng: </label> 
                                <i className='bx bxs-lock-alt' ><FaFacebookF /></i>
                                <i className='bx bxs-lock-alt' ><FcGoogle  /></i>
                            </div>
                            <div className="logreg-link animation" style={{'--i': 4, '--j':16}}>
                                <p>Bạn chưa có tài khoản? <a href="#" className="register-link" onClick={LogAndReg}>Đăng ký</a></p>
                            </div>
                        </form>
                    </div>

                    {/* register */}
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

                    {/* forgotpass */}

                    <div className='form-box forgotpass'>
                        <h2 className="animation" style={{'--i':10, '--j':0}}>RESET PASSWORD</h2>
                        <form action="#" className='forgotForm'>
                            <button type="submit" className="butn animation" style={{'--i':11, '--j':1}} onClick={LogAnd4got}>EMAIL</button>
                            <button type="submit" className="butn animation" style={{'--i':12, '--j':2}} onClick={LogAnd4got}>OTP</button>
                            <button type="submit" className="butn animation" style={{'--i':13, '--j':3}} onClick={LogAnd4got}>CAPCHA</button>
                            <div className='backtolog animation'  style={{'--i': 14, '--j':4}} onClick={LogAnd4got}>
                                Về trang đăng nhập
                            </div>
                            <button type="submit" className="btn animation" style={{'--i':15, '--j':5}} onClick={LogAnd4got}>XÁC NHẬN</button>
                        </form>
                        {/* <button type="submit" className="btn animation" style={{'--i':21, '--j':4}}>Đăng ký</button>
                        <button type="submit" className="btn animation" style={{'--i':21, '--j':4}}>Đăng ký</button> */}
                    </div>
                </div>
            </div>
    );
}

export default LoginPage;