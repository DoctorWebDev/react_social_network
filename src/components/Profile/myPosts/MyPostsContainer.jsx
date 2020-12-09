import {connect} from "react-redux";
import MyPosts from "./MyPosts";
import {addPostActionCreator, updatePostTextActionCreator} from "../../../redux/profileReducer";

let mapStateToProps = (state) => {
	return {
		profilePage: state.profilePage
	}
};

let mapDispatchToProps = (dispatch) => {
	return {
		onAddNewPost: () => {
			dispatch(addPostActionCreator())
		},
		onUpdateText: (text) => {
			dispatch(updatePostTextActionCreator(text))
		}
	}
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer;