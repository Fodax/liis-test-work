import { ADD_FAVORITE, HIDE_LOADER, REMOVE_FAVORITE, REQUEST_HOTELS, SET_CITY, SET_DATEIN, SET_NUMBEROFDAYS, SHOW_LOADER } from "./types";

export function setCity(city) {
	return {
		type: SET_CITY,
		payload: city
	};
}

export function setDateIn(dateIn) {
	return {
		type: SET_DATEIN,
		payload: dateIn
	};
}

export function setNumberOfDays(numberOfDays) {
	return {
		type: SET_NUMBEROFDAYS,
		payload: numberOfDays
	};
}


export function fetchHotels() {
	return {
		type: REQUEST_HOTELS
	};
}

export function showLoader() {
	return {
		type: SHOW_LOADER
	};
}

export function hideLoader() {
	return {
		type: HIDE_LOADER
	};
}


export function addFavorite(newFavorites) {
	return {
		type: ADD_FAVORITE,
		payload: newFavorites
	};
}

export function removeFavorite(hotelId) {
	return {
		type: REMOVE_FAVORITE,
		payload: hotelId
	};
}