import React from 'react';

import AutoCompleteListItem from '../autocomplete_list_item/autocomplete_list_item';

import style from './autocomplete_list.scss';

/**
 * Functional component for rendering retrieved videos.
 * @param props
 */
const AutoCompleteList = props => {

    // Map videos to components list. Pass callback method to handle selected video.
    const videoItems = props.videosList.map(video => {
        return <AutoCompleteListItem video={video} key={video.etag} onVideoSelect={props.onVideoSelect}/>;
    });

    return (
        <div className="AutoCompleteList">
            <ul className="resultsListWrapper">
                <li className="listTitle">Did you mean:</li>
                {videoItems}
            </ul>
        </div>
    );

}

export default AutoCompleteList;