import './login.css';
import api from '../api';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { FaUser, FaLock } from 'react-icons/fa';
import { MdEmail } from "react-icons/md";
import { LogAndReg } from './goto';
import { CREATE_USER_URL } from '../const';
function ResBox() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const navigate = useNavigate();
    async function register(e){
        e.preventDefault();
        const data = {
            username: username,
            password: password,
            email: email,
            first_name: firstName,
            last_name: lastName
        }
        try{
            const resp = await api.post(CREATE_USER_URL, data);
            if(resp.status === 201){
                navigate('/');
            }
            else{
                console.log(resp.data);
            }
        }
        catch(err){
            console.log(err.response.data);
        }
    }
    return (
        <div className="form-box register">
                        <h2 className="animation" style={{'--i':10, '--j':0}}>ĐĂNG KÝ</h2>
                        <form>
                            <div className="input-box animation" style={{'--i':11, '--j':1}}>
                                <input onChange={(e)=>{setUsername(e.target.value)}} type="text" required></input>
                                <label>Tên đăng nhập</label>
                                <i className='bx bxs-user'><FaUser /></i>
                            </div>
                            <div className="input-box animation" style={{'--i':12, '--j':2}}>
                                <input onChange={(e)=>{setEmail(e.target.value)}} type="text" required></input>
                                <label>Email</label>
                                <i className='bx bxs-envelope' ><MdEmail /></i>
                            </div>
                            <div className="input-box animation" style={{'--i':13, '--j':3}}>
                                <input onChange={(e)=>{setPassword(e.target.value)}} type="password" required></input>
                                <label>Mật khẩu</label>
                                <i className='bx bxs-lock-alt' ><FaLock /></i>
                            </div>
                            <div className="input-box animation" style={{'--i':14, '--j':3}}>
                                <input type="password" required></input>
                                <label>Nhập lại mật khẩu</label>
                                <i className='bx bxs-lock-alt' ><FaLock /></i>
                            </div>
                            <button onClick={register} type="submit" className="btn animation" style={{'--i':15, '--j':4}}>Đăng ký</button>
                            <div className="logreg-link animation" style={{'--i':16, '--j':5}}>
                                <p>Bạn đã có tài khoản? <a href="#" className="login-link" onClick={LogAndReg}>Đăng nhập</a></p>
                            </div>
                        </form>
                    </div>
    );
}

export default ResBox;