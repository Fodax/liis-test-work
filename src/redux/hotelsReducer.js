import { FETCH_HOTELS, HIDE_LOADER, SHOW_LOADER } from "./types";

const initialState = {
	hotels: [],
	isLoading: false
}

const hotelsReducer = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_HOTELS:
			return {isLoading: state.isLoading, hotels: action.payload}
		case SHOW_LOADER:
			return {isLoading: true, hotels: state.hotels};
		case HIDE_LOADER:
			return {isLoading: false, hotels: state.hotels};
		default:
			 return state;
	}
};

export default hotelsReducer;