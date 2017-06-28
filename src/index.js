import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import reduxThunk from 'redux-thunk';
import reducers from './reducers';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import Header from './components/header/header';

import style from './index.scss';

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
const store = createStoreWithMiddleware(reducers);

ReactDOM.render(
    <Provider store={store}>
        <div>
            <Header/>
            <div className="textInBody">
                Search anything.
            </div>
        </div>

    </Provider>
    , document.querySelector('#RootContainer'));
