import img_1 from '../resources/img/slider/slider-1.png';
import img_2 from '../resources/img/slider/slider-2.png';
import img_3 from '../resources/img/slider/slider-3.png';
import img_4 from '../resources/img/slider/slider-4.png';

const initialState = {
	imgs: [
		img_1,
		img_2,
		img_3,
		img_4
	]
}

const sliderReducer = (state = initialState, action) => {
	return state;
};

export default sliderReducer;