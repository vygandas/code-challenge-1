import React, { Component } from 'react';

import SearchBar from '../search_bar/search_bar';
import Navigation from '../navigation/navigation';

import style from './header.scss';

/**
 * Holds all components displayed in the header part.
 */
class Header extends Component {

    render () {
        return (
            <header className="Header">
                <div className="container">
                    <div className="col-md-10 col-md-offset-1">
                        <div className="row">
                            <Navigation/>
                            <div className="heroText">
                                <h2>Find Youtube videos faster!</h2>
                                <h1>Quandoo Power YT Explorer.</h1>
                            </div>
                            <div className="searchFormWrapper">
                                <SearchBar/>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        );
    }

}

export default Header;