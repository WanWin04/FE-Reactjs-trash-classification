import './login.css';
import { LogAnd4got } from './goto';

function forgotBox() {
    return (
                    
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
    );
};

export default forgotBox;