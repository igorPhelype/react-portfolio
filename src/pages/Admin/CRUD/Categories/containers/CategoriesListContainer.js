import { compose } from "redux";
import { connect } from "react-redux";
import { fetchCategories } from "../actions/categoriesActions";
import { CategoriesList } from "../components";

const mapStateToProps = ({categoriesList}) => ({
	categoriesList
});

const mapDispatchToProps = (dispatch) => ({
	fetchCategories: fetchCategories(dispatch)
});

export default compose(
    connect(mapStateToProps, mapDispatchToProps)
)(CategoriesList)