import {combineReducers} from 'redux'
import authReducer from './auth'
import channelReducers from './Channel'
import currentUserReducer from './currentUser'
import videoReducer from './video'
import likedVideoReducer from './likedVideo'
import watchLaterReducer from './watchLater'
import HistoryReducer from './history'
import commentReducer from './comments'
export default combineReducers({
    authReducer,currentUserReducer,channelReducers,videoReducer,likedVideoReducer,watchLaterReducer,HistoryReducer,
    commentReducer
})