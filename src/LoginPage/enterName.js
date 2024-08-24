import './login.css';
import { LogAnd4got, ResAndEnterName} from './goto';
import { FaUser} from 'react-icons/fa';

function enterName() {
    return (
        <div className='form-box enterName'>
            <h2 className="animation" style={{'--i':10, '--j':0}}>TÊN CỦA BẠN</h2>
            <form action="#" className='forgotForm'>                    
                <div className="input-box animation" style={{'--i':11, '--j':1}}>
                    <input type="text" required></input>
                    <label>Họ và tên</label>
                    <i className='bx bxs-user'><FaUser /></i>
                </div>
                <div className='backtolog animation'  style={{'--i': 14, '--j':4}} onClick={ResAndEnterName}>
                    Quay lại
                </div>
                <button type="submit" className="btn animation" style={{'--i':15, '--j':5}} onClick={LogAnd4got}>XÁC NHẬN</button>
            </form>
            {/* <button type="submit" className="btn animation" style={{'--i':21, '--j':4}}>Đăng ký</button>
            <button type="submit" className="btn animation" style={{'--i':21, '--j':4}}>Đăng ký</button> */}
        </div>
    );
}

export default enterName;