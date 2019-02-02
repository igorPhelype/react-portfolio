import { combineReducers } from 'redux';
import { userReducer } from '../../pages/Admin/AdminDashboard/reducers/reducer';
import { categoriesList } from '../../pages/Admin/CRUD/Categories/reducers/categoriesReduces';

const combinedReducers = combineReducers({
    user: userReducer,
    categoriesList
});

export default combinedReducers;
