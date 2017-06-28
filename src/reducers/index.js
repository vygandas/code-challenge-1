import { combineReducers } from 'redux';
import searchReducer from './search_reducer';

const rootReducer = combineReducers({
    videos: searchReducer
});

export default rootReducer;
