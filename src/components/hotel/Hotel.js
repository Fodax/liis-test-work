import RaitingStars from '../raitingStars/RaitingStars';
import { getNameOfMonth } from '../../functions';
import houseIcon from '../../resources/icons/house.svg';
import { connect } from 'react-redux';
import { addFavorite, removeFavorite } from '../../redux/actions';

import './hotel.scss';

const getDaysUnit = (days) => {
	if (days > 19 || days < 10) {
		const digit = days % 10;

		if (digit === 0) {
			return 'дней';
		} else if (digit === 1) {
			return 'день';
		} else if (digit < 5) {
			return 'дня';
		} else {
			return 'дней';
		}
	} else {
		return 'дней';
	}
};

const Hotel = ({hotelId, name, strDate, days, stars, price, hideIcon = false, addFavorite, removeFavorite, favorite, favorites}) => {
	const date = new Date(strDate);

	const onHeartClick = () => {
		if (favorite || hotelId in favorites) {
			removeFavorite(hotelId);
		} else {
			addFavorite({[hotelId]: {
				name,
				date: strDate,
				days,
				stars,
				price
			}});
		}
	};

	return (
		<div className="hotel">
			{
				!hideIcon ? 
				<div className="hotel__icon-wrapper">
					<img className='hotel__icon' src={houseIcon} alt="иконка" />
				</div>
				: ''
			}
			<div className="hotel__content">
				<div className="hotel__top">
					<h3 className="hotel__title">{name}</h3>
					<svg onClick={onHeartClick} className={`hotel__heart${favorite || hotelId in favorites ? ' hotel__heart_active' : ''}`} width="23" height="20" viewBox="0 0 23 20" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M20.3807 2.59133C19.8676 2.08683 19.2583 1.68663 18.5878 1.41358C17.9172 1.14054 17.1985 1 16.4727 1C15.7468 1 15.0281 1.14054 14.3576 1.41358C13.687 1.68663 13.0778 2.08683 12.5646 2.59133L11.4997 3.63785L10.4348 2.59133C9.39834 1.57276 7.99258 1.00053 6.52679 1.00053C5.06099 1.00053 3.65523 1.57276 2.61876 2.59133C1.58229 3.6099 1 4.99139 1 6.43187C1 7.87235 1.58229 9.25383 2.61876 10.2724L3.68367 11.3189L11.4997 19L19.3158 11.3189L20.3807 10.2724C20.8941 9.76814 21.3013 9.16942 21.5791 8.51045C21.857 7.85148 22 7.14517 22 6.43187C22 5.71857 21.857 5.01225 21.5791 4.35328C21.3013 3.69431 20.8941 3.09559 20.3807 2.59133Z" fill="white" stroke="#C4C4C4" strokeLinecap="round" strokeLinejoin="round"/>
					</svg>
				</div>
				<div className="hotel__middle">
					<span className="hotel__date">{`${date.getDate()} ${getNameOfMonth(date.getMonth())} ${date.getFullYear()}`}</span>
					<span className="hotel__days">{days} {getDaysUnit(days)}</span>
				</div>
				<div className="hotel__bottom" style={hideIcon ? {marginTop: 5} : {}}>
					<RaitingStars className='hotel__raiting' raiting={stars}/>
					<span className="hotel__price">Price: <span className="hotel__price-value">{new Intl.NumberFormat('ru-RU').format(Math.round(price))} ₽</span></span>
				</div>
			</div>
		</div>
	);
};

const mapStateToProps = ({favorites}) => ({
	favorites: favorites.favorites
});

const mapDispatchToProps = {
	addFavorite,
	removeFavorite
};

export default connect(mapStateToProps, mapDispatchToProps)(Hotel);