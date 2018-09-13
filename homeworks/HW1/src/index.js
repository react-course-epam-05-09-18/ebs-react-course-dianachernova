import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './Navigation';
import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(<Navigation />, document.getElementById('root'));

registerServiceWorker();
