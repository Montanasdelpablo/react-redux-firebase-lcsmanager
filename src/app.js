import React from 'react';
import ReactDOM from 'react-dom';
import Provider from 'redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import App from './components/App.js';


import dataStore from './store.js';

ReactDOM.render(<MuiThemeProvider>
                    <App store={dataStore}> </App>
                </MuiThemeProvider>,document.getElementById('app'));
