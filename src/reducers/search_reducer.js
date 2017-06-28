import { SEARCH } from '../actions/types';

export default function (state = [], action) {

    switch (action.type) {
        case SEARCH:
            return [ ...action.payload ];
    }

    return state;

}