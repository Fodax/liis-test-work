import { connect } from 'react-redux';
import { fetchHotels, setCity, setDateIn, setNumberOfDays } from '../../redux/actions';
import { useEffect, useState } from 'react';

import './searchForm.scss';

const SearchForm = ({className, city, date, days, todayDate, setCity, setDate, setDays, fetchHotels}) => {
	const [cityInputValue, setCityInputValue] = useState(city);
	const [dateInputValue, setDateInputValue] = useState(date);
	const [daysInputValue, setDaysInputValue] = useState(days);

	useEffect(() => {
		fetchHotels();
	}, []);

	const onSubmit = e => {
		e.preventDefault();

		setCity(cityInputValue);
		setDate(dateInputValue);
		setDays(daysInputValue);

		fetchHotels();
	};

	const onInputDays = e => {
		const value = e.target.value;
		const regex = /^\d+$/iu;
		
		if (!value || (regex.test(value) && value > 0)) {
			setDaysInputValue(value);
		}
	};

    return (
        <div className={`search-form ${className ? className : ''}`}>
			<form onSubmit={onSubmit} className="search-form__form">
				<div className={`search-form__form-row`}>
					<label htmlFor="city-input" className="search-form__form-label">Локация</label>
					<input value={cityInputValue} onInput={(e) => setCityInputValue(e.target.value)} type="text" name='city' id='city-input' className="search-form__form-input" />
					{!cityInputValue ? <span className='login-form__form-error'>Введите город</span> : null}
				</div>
				<div className={`search-form__form-row`}>
					<label htmlFor="date-input" className="search-form__form-label">Дата заселения</label>
					<input min={todayDate} value={dateInputValue} onInput={(e) => setDateInputValue(e.target.value)} type="date" name='date' id='date-input' className="search-form__form-input" />
					{!dateInputValue ? <span className='login-form__form-error'>Введите дату заселения</span> : null}
				</div>
				<div className={`search-form__form-row`}>
					<label htmlFor="days-input" className="search-form__form-label">Количество дней</label>
					<input value={daysInputValue} onInput={onInputDays} type="text" name='days' id='days-input' className="search-form__form-input" />
					{!daysInputValue ? <span className='login-form__form-error'>Введите количество дней</span> : null}
				</div>
				<button className='btn search-form__form-btn' type='submit' disabled={!cityInputValue || !dateInputValue || !daysInputValue}>
					<span className="btn__title">Найти</span>
				</button>
			</form>
		</div>
    )
}

const mapStateToProps = ({search}) => ({
	city: search.city,
	date: search.dateIn,
	todayDate: search.todayDate,
	days: search.numberOfDays
});

const mapDispatchToProps = {
	setCity,
	setDate: setDateIn,
	setDays: setNumberOfDays,
	fetchHotels
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchForm);