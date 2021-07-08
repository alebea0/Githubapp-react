import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';
ReactDOM.hydrate(
    <App title="The GitHub Cards App" />,
    document.getElementById('root'),
);
