import { FirestoreGet } from "../../../../../FirebaseUtils/firestore";
import { FETCH_CATEGORIES } from "./actionTypes";

export const fetchCategories = (dispatch) => async () => {
    try{
        const categories = await FirestoreGet('category');
        dispatch({type: FETCH_CATEGORIES, payload: categories});
    }catch(e){
        dispatch({type: FETCH_CATEGORIES, payload: []});
    }
}