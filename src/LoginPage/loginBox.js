import './login.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaUser, FaLock, FaFacebookF } from 'react-icons/fa';
import { FcGoogle } from "react-icons/fc";
import { LogAnd4got, LogAndReg,GgAndEnterName} from './goto';
import api from '../api';
import { ACCESS_TOKEN, REFRESH_TOKEN } from '../const';

function LoginBox(){
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    async function login(e){
        e.preventDefault();
        const data = {
            username: username,
            password: password
        }
        try{
            const resp = await api.post('/auth/token/', data);
            localStorage.setItem(ACCESS_TOKEN, resp.data.access);
            localStorage.setItem(REFRESH_TOKEN, resp.data.refresh);
            navigate('/');
        }
        catch(err){
            console.log(err.response.data);
        }
    }
    return (
        <div className="form-box login">
                        <h2 className="animation" style={{'--i': 0, '--j':10}}>ĐĂNG NHẬP</h2>
                        <form>
                            <div className="input-box animation" style={{'--i': 1, '--j':11}}>
                                <input type="text" onChange={(e)=>{setUsername(e.target.value)}} value={username} required></input>
                                <label>Tên đăng nhập</label>
                                <i className='bx bxs-user'><FaUser /></i>
                            </div>
                            <div className="input-box animation" style={{'--i': 2, '--j':12}}>
                                <input type="password"  onChange={(e)=>{setPassword(e.target.value)}} value={password} required></input>
                                <label>Mật khẩu</label>
                                <i className='bx bxs-lock-alt' ><FaLock /></i>
                            </div>
                            <div className='forgot animation'  style={{'--i': 3, '--j':13}} onClick={LogAnd4got}>
                                Quên mật khẩu
                            </div>
                            <button onClick={login} type="submit" className="btn animation" style={{'--i': 3, '--j':14}}>Đăng nhập</button>
                            <div className="log-icon animation" style={{'--i': 3, '--j':15}}>
                                <label>Bạn muốn đăng nhập bằng: </label> 
                                <i className='bx bxs-lock-alt' ><FaFacebookF /></i>
                                <i className='bx bxs-lock-alt' onClick={GgAndEnterName}><FcGoogle  /></i>
                            </div>
                            <div className="logreg-link animation" style={{'--i': 4, '--j':16}}>
                                <p>Bạn chưa có tài khoản? <a href="#" className="register-link" onClick={LogAndReg}>Đăng ký</a></p>
                            </div>
                        </form>
                    </div>
    );
}

export default LoginBox;