import React from "react";
import {addPostActionCreator, updatePostTextActionCreator} from "../../../../redux/profileReducer";
import NewPost from "./NewPost";

const NewPostContainer = ({store}) => {
    let onAddNewPost = () => {
        store.dispatch(addPostActionCreator());
    };

    let onUpdateText = (text) => {
        store.dispatch(updatePostTextActionCreator(text));
    };

    return <NewPost onAddNewPost={onAddNewPost}
                    onUpdateText={onUpdateText}/>
}

export default NewPostContainer;