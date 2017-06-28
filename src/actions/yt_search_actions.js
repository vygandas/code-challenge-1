import { SEARCH } from './types';
import * as apiConfig from '../config/api';
import YTSearch from 'youtube-api-search';

/**
 * Action does Youtube API search using youtube-api-search module.
 * @param term Input text - search term.
 * @returns dispatches SEARCH action with retrieved videos from Youtube.
 */
export function searchYt(term) {

    return dispatch => {
        YTSearch({key: apiConfig.API_KEY_YOUTUBE, term}, videos => {
            dispatch({
                type: SEARCH,
                payload: videos
            });
        });
    }

}