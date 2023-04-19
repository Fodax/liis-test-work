import { combineReducers } from "redux";
import hotelsReducer from "./hotelsReducer";
import searchReducer from "./searchReducer";
import sliderReducer from "./sliderReducer";
import favortiesReducer from "./favoritesReducer";

const rootReducer = combineReducers({
	hotels: hotelsReducer,
	search: searchReducer,
	slider: sliderReducer,
	favorites: favortiesReducer
});

export default rootReducer;