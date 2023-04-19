import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/App';
import { Provider } from 'react-redux'
import { applyMiddleware, compose, createStore } from 'redux';
import rootReducer from './redux/rootReducer';
import createSagaMiddleware from 'redux-saga';
import sagaWathcer from './redux/sagas';

import './style/style.scss';

const saga = createSagaMiddleware();

const store = createStore(
	rootReducer,
	compose(
		applyMiddleware(
			saga
		),
		// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
	)
);

saga.run(sagaWathcer);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<Provider store={store}>
		<App />
	</Provider>
);