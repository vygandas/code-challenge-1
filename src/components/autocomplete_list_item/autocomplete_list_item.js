import React, { Component } from 'react';

import style from './autocomplete_list_item.scss';

/**
 * Autocomplete list item. Handles video element click,
 * returns callback and displays video data.
 */
class AutoCompleteListItem extends Component {

    render() {
        const { video } = this.props;
        return (
            <li className="AutoCompleteListItem" onClick={() => this.props.onVideoSelect(video)}>
                <span className="videoThumbnail">
                    <img src={video.snippet.thumbnails.default.url} className="img-responsive"/>
                </span>
                <span className="videoTitle">
                    {video.snippet.title}
                </span>
                <span className="watchIcon">
                    <i className="fa fa-eye"></i>
                </span>
            </li>
        );
    }

}

export default AutoCompleteListItem;