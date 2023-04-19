import {useState} from 'react';
import { useNavigate } from 'react-router-dom';

import './loginForm.scss';

const LoginForm = ({className}) => {
	const [login, setLogin] = useState(''),
		[pass, setPass] = useState('');

	const [loginErr, setLoginErr] = useState(false),
		[passErr, setPassErr] = useState(false);

	const navigate = useNavigate();

	const isEmailValid = (email) => {
		const regex = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;

		return regex.test(email);
	};

	const isPassValid = (pass) => {
		const regex = /^[^а-яёА-ЯЁ]{8,}$/iu;

		return regex.test(pass);
	};

	const onSubmit = e => {
		e.preventDefault();

		const loginErr = !isEmailValid(login),
			passErr = !isPassValid(pass);

		setLoginErr(loginErr);
		setPassErr(passErr);

		if (!(loginErr || passErr)) {
			localStorage.setItem('isLogin', true);
			navigate('/', {replace: true});
		}
	};

    return (
        <div className={`login-form ${className ? className : ''}`}>
			<h1 className='login-form__title'>Simple Hotel Check</h1>
			<form onSubmit={onSubmit} className="login-form__form">
				<div className={`login-form__form-row ${loginErr ? ' login-form__form-row_error' : ''}`}>
					<label htmlFor="login-input" className="login-form__form-label">Логин</label>
					<input value={login} onChange={e => setLogin(e.target.value)} type="text" name='login' id='login-input' className="login-form__form-input" />
					{loginErr ? <span className='login-form__form-error'>Введите существующий e-mail</span> : null}
				</div>
				<div className={`login-form__form-row${passErr ? ' login-form__form-row_error' : ''}`}>
					<label htmlFor="password-input" className="login-form__form-label">Пароль</label>
					<input value={pass} onChange={e => setPass(e.target.value)} type="password" name='password' id='password-input' className="login-form__form-input" />
					{passErr ? <span className='login-form__form-error'>Пароль не должен содержать кириллицу<br/> Минимум 8 символов</span> : null}
				</div>
				<button className='btn login-form__form-btn' type='submit'>
					<span className="btn__title">Войти</span>
				</button>
			</form>
		</div>
    )
}

export default LoginForm;