import {combineReducers} from 'redux';
import { userReducer } from '../../pages/UserDashboard/reducers/reducer';

const combinedReducers = combineReducers({
    user: userReducer
});

export default combinedReducers;
