import LoginForm from '../loginForm/LoginForm';
import { Navigate } from 'react-router-dom';

import './loginPage.scss';
import bg from '../../resources/img/login-bg.png';

const LoginPage = () => {
    return (
		<>
			{
				localStorage.getItem('isLogin') === 'true' ? <Navigate to="/" replace/> :
				<section className='login-page'>
					<div className="login-page__bg-wrapper">
						<img src={bg} alt="" className="login-page__bg" />
					</div>
					<LoginForm className="login-page__form"/>
				</section>
			}
		</>
    )
}

export default LoginPage;