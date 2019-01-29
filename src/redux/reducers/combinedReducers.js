import {combineReducers} from 'redux';
import {userReducer} from '../../pages/Admin/AdminDashboard/reducers/reducer';

const combinedReducers = combineReducers({
    user: userReducer
});

export default combinedReducers;
