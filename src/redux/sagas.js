import {call, put, select, takeEvery} from 'redux-saga/effects';
import { FETCH_HOTELS, REQUEST_HOTELS } from './types';
import { getFormattedDate } from '../functions';
import { hideLoader, showLoader } from './actions';

function* sagaWathcer() {
	yield takeEvery(REQUEST_HOTELS, sagaWorker);
}

function* sagaWorker() {
	try {
		yield put(showLoader());
		const city = yield select(({search}) => search.city);
		const strDateIn = yield select(({search}) => search.dateIn);
		const days = yield select(({search}) => search.numberOfDays);

		const payload = yield call(fetchHotels, city, strDateIn, days);
		if (payload.status === 'error') {
			yield put({type: FETCH_HOTELS, payload: []});
		} else {
			yield put({type: FETCH_HOTELS, payload});
		}
		yield put(hideLoader());
	} catch (e) {
		yield (hideLoader());
	}
}

async function fetchHotels(city, strDateIn, days) {
	const dateOut = new Date(strDateIn);
	dateOut.setDate(dateOut.getDate() + +days);

	const strDateOut = getFormattedDate(dateOut);

	const response = await fetch(`http://engine.hotellook.com/api/v2/cache.json?location=${city}&currency=rub&checkIn=${strDateIn}&checkOut=${strDateOut}&limit=30`);
	return await response.json();
}

export default sagaWathcer;