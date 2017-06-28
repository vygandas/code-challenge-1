import React, { Component } from 'react';

import style from './navigation.scss';

/**
 * Holds navigation components.
 */
class Navigation extends Component {

    render () {
        return (
            <nav id="main" className="Navigation navbar">
                <div className="navbar-header">
                    <a className="navbar-brand" id="logo-black" href="/">
                        <img src="/images/logo_light_header.svg"
                             alt="Quandoo"
                             className="img-responsive"
                             title="logo_light_header"/>
                    </a>
                </div>
            </nav>
        );
    }

}

export default Navigation;