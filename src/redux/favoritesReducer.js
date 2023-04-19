import { ADD_FAVORITE, REMOVE_FAVORITE } from "./types";

const initialState = {
	favorites: {}
};

const favortiesReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_FAVORITE:
			return {favorites: {...state.favorites, ...action.payload}};
		case REMOVE_FAVORITE:
			const newFavorites = {...state.favorites};
			delete newFavorites[action.payload];

			return {favorites: newFavorites};
		default:
			return state;
	}
};

export default favortiesReducer;