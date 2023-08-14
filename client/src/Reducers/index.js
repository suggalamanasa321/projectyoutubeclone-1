import {combineReducers} from 'redux'
import authReducer from './auth'
import channelReducers from './Channel'
import currentUserReducer from './currentUser'
import videoReducer from './video'
export default combineReducers({
    authReducer,currentUserReducer,channelReducers,videoReducer
})