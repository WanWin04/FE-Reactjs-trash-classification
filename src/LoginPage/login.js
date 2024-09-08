import './login.css';
import LoginBox from './loginBox';
import ResBox from './resBox';
import ForgotBox from './forgotBox';
import EnterName from './enterName';
import { func } from './goto';
import Header from '../Header/header';
import Footer from '../Footer/Footer';
function LoginPage() {
    return (
        <div>
            <Header />
            <div id="page-body" onClick={func}>
                <div id="main-bg"></div>
                <div className="login-box">
                    {/* login */}
                        <LoginBox />

                    {/* register */}
                        <ResBox/>

                    {/* forgotpass */}
                        <ForgotBox />
                    {/* enterName */}
                        <EnterName />
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default LoginPage;