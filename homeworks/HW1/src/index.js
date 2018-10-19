import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk'
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux';
import { createStore, applyMiddleware }  from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import {coursesReducer} from './features/courses/store'
import {AppRouter} from './app-router';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const store = createStore(coursesReducer, composeWithDevTools(applyMiddleware(thunk)));

ReactDOM.render(<Provider store={store}>< AppRouter /></Provider>, document.getElementById('root'));

registerServiceWorker();
