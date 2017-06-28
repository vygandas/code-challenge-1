import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/yt_search_actions';
import onClickOutside from 'react-onclickoutside'

import AutoCompleteList from '../autocomplete_list/autocomplete_list';

import style from './search_bar.scss';

/**
 * Handles search and auto-completion.
 */
class SearchBar extends Component {

    // Initialize state
    constructor(props) {
        super(props);
        this.state = { term: '', showAutoComplete: true };
    }

    // Update term in state and do youtube search
    onInputChange(term) {
        this.setState({ term, showAutoComplete: true });
        this.props.searchYt(term);
    }

    // Reset state when user clicks outside search input or auto-complete select
    handleClickOutside = evt => {
        this.setState({ term: '', showAutoComplete: true });
    }

    // Update user input with his selected video title
    onVideoSelect(video) {
        this.setState({ term: video.snippet.title, showAutoComplete: false })
    }

    render () {
        return (
            <div className="SearchBar">
                <span className="searchBarTitle">
                    Search for any Youtube video you want!
                </span>
                <div className="input-group">
                    <div className="searchInputAndAutoCompleteWrapper">
                        <input type="text"
                               className="form-control inputYoutubeSearch"
                               placeholder="Search for video..."
                               value={this.state.term}
                               onChange={event => this.onInputChange(event.target.value)} />
                        {this.state.term.length > 0 && this.state.showAutoComplete
                        && <AutoCompleteList videosList={this.props.videos}
                                             onVideoSelect={selectedVideo => this.onVideoSelect(selectedVideo)}/>}
                    </div>
                    <span className="input-group-btn">
                        <button className="btn btn-secondary btnSearchYoutube" type="button">
                            <i className="fa fa-youtube-play" aria-hidden="true"></i>
                        </button>
                    </span>
                </div>
            </div>
        );
    }

}

function mapStateToProps(state) {
    return { videos: state.videos, term: state.term };
}

export default connect(mapStateToProps, actions)(onClickOutside(SearchBar));