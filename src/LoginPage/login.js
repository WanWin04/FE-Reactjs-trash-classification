import './login.css';

function LoginPage() {
    return (
        <div className="body">
            <div id="page-body">
                <div id="main-bg"></div>
                <div className="login-box">
                <div className="form-box login">
                    <h2 className="animation">ĐĂNG NHẬP</h2>
                    <form action="#">
                        <div className="input-box animation">
                            <input type="text" required></input>
                            <label>Tên đăng nhập</label>
                            <i className='bx bxs-user'></i>
                        </div>
                        <div className="input-box animation">
                            <input type="password" required></input>
                            <label>Mật khẩu</label>
                            <i className='bx bxs-lock-alt' ></i>
                        </div>
                        <button type="submit" className="btn animation">Login</button>
                        <div className="logreg-link animation">
                            <p>Bạn chưa có tài khoản? <a href="#" className="register-link">Đăng ký</a></p>
                        </div>
                    </form>
                </div>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;