import { useNavigate } from 'react-router-dom';

import './header.scss';

const Header = () => {
	const navigate = useNavigate();

	const onUnlogin = e => {
		localStorage.setItem('isLogin', false);
		navigate('/login', {replace: true});
	}

    return (
		<header className='header'>
			<h1 className="header__logo">Simple Hotel Check</h1>
			<div onClick={onUnlogin} className="header__unlogin-btn">
				<span className="header__unlogin-btn-title">Выйти</span>
				<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M9 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H9" stroke="#41522E" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
					<path d="M16 17L21 12L16 7" stroke="#41522E" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
					<path d="M21 12H9" stroke="#41522E" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
				</svg>
			</div>
		</header>
    )
}

export default Header;