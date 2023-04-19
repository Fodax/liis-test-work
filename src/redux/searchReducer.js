import { SET_CITY, SET_DATEIN, SET_NUMBEROFDAYS } from "./types";
import { getFormattedDate } from "../functions";

const todayDate = new Date();
const formattedTodayDate = getFormattedDate(todayDate);

const initialState = {
	city: 'Москва',
	dateIn: formattedTodayDate,
	todayDate: formattedTodayDate,
	numberOfDays: 1
}

const searchReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_CITY:
			return {...state, city: action.payload};
		case SET_DATEIN:
			return {...state, dateIn: action.payload};
		case SET_NUMBEROFDAYS:
			return {...state, numberOfDays: action.payload};
		default: 
			return state;
	}
};

export default searchReducer;