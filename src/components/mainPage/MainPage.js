import Header from '../header/Header';
import SearchForm from '../searchForm/SearchForm';
import Hotels from '../hotels/Hotels';
import Favorites from '../favorites/Favorites';
import { Navigate } from 'react-router-dom';

import './mainPage.scss';

const MainPage = () => {
	return (
		<>
			{
				localStorage.getItem('isLogin') === 'false' ? <Navigate to="/login" replace/> :
				<>
					<section className='main-page'>
						<Header/>
						<div className="container">
							<div className="main-page__content">
								<SearchForm/>
								<Hotels className='main-page__hotels'/>
								<Favorites/>
							</div>
						</div>
					</section>
				</>
			}
		</>
    )
}

export default MainPage;