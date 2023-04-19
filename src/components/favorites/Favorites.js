import { OverlayScrollbarsComponent } from 'overlayscrollbars-react';
import Hotel from '../hotel/Hotel';
import { useState } from 'react';
import { connect } from 'react-redux';

import 'overlayscrollbars/overlayscrollbars.css';
import './favorites.scss';

const Favorites = ({favorites}) => {
	const [isRaitingSortBtnActive, setIsRaitingSortBtnActive] = useState(true);
	const [isPriceSortBtnActive, setIsPriceSortBtnActive] = useState(false);
	
	const [sortType, setSortType] = useState('up');

	const onRaitingSortBtnClick = () => {
		if (isRaitingSortBtnActive) {
			switch (sortType) {
				case 'up':
					setSortType('down');
					break;
				case 'down':
					setSortType('up');
					break;
				default:
					break;
			}
		} else {
			setIsRaitingSortBtnActive(true);
			setIsPriceSortBtnActive(false);
			setSortType('up');
		}
	}

	const onPriceSortBtnClick = () => {
		if (isPriceSortBtnActive) {
			switch (sortType) {
				case 'up':
					setSortType('down');
					break;
				case 'down':
					setSortType('up');
					break;
				default:
					break;
			}
		} else {
			setIsPriceSortBtnActive(true);
			setIsRaitingSortBtnActive(false);
			setSortType('up');
		}
	}

	const favoritesList = Object.keys(favorites)
	.sort((a, b) => {
		switch (sortType) {
			case 'up':
				if (isRaitingSortBtnActive) {
					return favorites[a].stars - favorites[b].stars;
				} else if (isPriceSortBtnActive) {
					return favorites[a].price - favorites[b].price;
				}
				return 0;
			case 'down':
				if (isRaitingSortBtnActive) {
					return favorites[b].stars - favorites[a].stars;
				} else if (isPriceSortBtnActive) {
					return favorites[b].price - favorites[a].price;
				}
				return 0;
			default:
				return 0;
		}
	})
	.map(hotelId => {
		const hotel = favorites[hotelId];

		return <Hotel hideIcon favorite key={hotelId} hotelId={hotelId} name={hotel.name} strDate={hotel.date} days={hotel.days} stars={hotel.stars} price={hotel.price}/>;
	});

	return (
		<div className="favorites">
			<h2 className="favorites__title">Избранное</h2>
			<div className="favorites__sort-btns">
				<div onClick={onRaitingSortBtnClick} className={`favorites__sort-btn${isRaitingSortBtnActive ? ' favorites__sort-btn_active favorites__sort-btn_' + sortType : ''}`}>
					<span className="favorites__sort-btn-title">Рейтинг</span>
					<span className="favorites__sort-btn-arrows">
						<svg className='favorites__sort-btn-arrow-up' width="9" height="6" viewBox="0 0 9 6" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M8.5 4.24264L7.43934 5.3033L4.25736 2.12132L1.07538 5.3033L0.014719 4.24264L4.25736 0L8.5 4.24264Z" fill="black" fillOpacity="0.32"/>
						</svg>
						<svg className='favorites__sort-btn-arrow-down' width="9" height="7" viewBox="0 0 9 7" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M8.5 1.83245L7.43934 0.77179L4.25736 3.95377L1.07538 0.77179L0.014719 1.83245L4.25736 6.07509L8.5 1.83245Z" fill="black" fillOpacity="0.32"/>
						</svg>
					</span>
				</div>
				<div onClick={onPriceSortBtnClick} className={`favorites__sort-btn${isPriceSortBtnActive ? ' favorites__sort-btn_active favorites__sort-btn_' + sortType : ''}`}>
					<span className="favorites__sort-btn-title">Цена</span>
					<span className="favorites__sort-btn-arrows">
						<svg className='favorites__sort-btn-arrow-up' width="9" height="6" viewBox="0 0 9 6" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M8.5 4.24264L7.43934 5.3033L4.25736 2.12132L1.07538 5.3033L0.014719 4.24264L4.25736 0L8.5 4.24264Z" fill="black" fillOpacity="0.32"/>
						</svg>
						<svg className='favorites__sort-btn-arrow-down' width="9" height="7" viewBox="0 0 9 7" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M8.5 1.83245L7.43934 0.77179L4.25736 3.95377L1.07538 0.77179L0.014719 1.83245L4.25736 6.07509L8.5 1.83245Z" fill="black" fillOpacity="0.32"/>
						</svg>
					</span>
				</div>
			</div>
			<OverlayScrollbarsComponent className='favorites__list' options={{overflowBehavior: {x: 'hidden'}}}>
				{!favoritesList.length ? 'Нет избранного :(' : ''}
				{favoritesList}
			</OverlayScrollbarsComponent>
		</div>
	);
};

const mapStateToProps = ({favorites}) => ({
	favorites: favorites.favorites
});

export default connect(mapStateToProps)(Favorites);