import Hotel from '../hotel/Hotel';
import { getNameOfMonth } from '../../functions';
import { connect } from 'react-redux';
import { Swiper, SwiperSlide } from 'swiper/react';
import { OverlayScrollbarsComponent } from "overlayscrollbars-react";

import 'overlayscrollbars/overlayscrollbars.css';
import 'swiper/css';
import './hotels.scss';

const getFavoritsCountUnit = (favoritesCount) => {
	if (favoritesCount > 19 || favoritesCount < 10) {
		const digit = favoritesCount % 10;

		if (digit === 0) {
			return 'отелей';
		} else if (digit === 1) {
			return 'отель';
		} else if (digit < 5) {
			return 'отеля';
		} else {
			return 'отелей';
		}
	} else {
		return 'отелей';
	}
};

const Hotels = ({className, city, dateIn, imgs, hotels, days, favoritesCount, isLoading}) => {
	const date = new Date(dateIn);

	const hotelsList = hotels.map(hotel => {
		return <Hotel key={hotel.hotelId} hotelId={hotel.hotelId} name={hotel.hotelName} strDate={dateIn} days={days} stars={hotel.stars} price={hotel.priceAvg}/>;
	});
	
	const loader = (
		<div className="loadingio-spinner-spinner-mwvd61iceim">
			<div className="ldio-lw4iwd5ngp">
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
			</div>
		</div>
	)

	return (
		<div className={`hotels ${className ? className : ''}`}>
			<div className="hotels__top">
				<div className="hotels__breadcrumbs">
					<h2 className="hotels__title">Отели</h2>
					<svg className='hotels__breadcrumbs-icon' width="11" height="20" viewBox="0 0 11 20" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M1 1.33334L9.66667 10L1 18.6667" stroke="#A7A7A7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
					</svg>
					<div className="hotels__city">{city}</div>
				</div>
				<div className="hotels__date">{`${date.getDate()} ${getNameOfMonth(date.getMonth())} ${date.getFullYear()}`}</div>
			</div>
			<div className="hotels__slider">
				<Swiper
					spaceBetween={12}
					slidesPerView={'auto'}
				>
					{imgs.map((el, index) => (
						<SwiperSlide className='hotels__slide' key={index}>
							<img
								className='hotels__slide-img'
								src={el}
								alt=""
							/>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
			<div className="hotels__fav-info">Добавлено в Избранное:&nbsp;&nbsp;<span className="hotels__fav-counter">{favoritesCount}</span> {getFavoritsCountUnit(favoritesCount)}</div>
			<OverlayScrollbarsComponent className="hotels__list" options={{overflowBehavior: {x: 'hidden'}}}>
				{!hotelsList.length && !isLoading ? 'Ничего не найдено :(' : null}
				{isLoading ? loader : hotelsList}
			</OverlayScrollbarsComponent>
		</div>
	);
};

const mapStateToProps = ({search, slider, hotels, favorites}) => ({
	city: search.city,
	dateIn: search.dateIn,
	days: search.numberOfDays,
	imgs: slider.imgs,
	hotels: hotels.hotels,
	isLoading: hotels.isLoading,
	favoritesCount: Object.keys(favorites.favorites).length
})

export default connect(mapStateToProps)(Hotels);