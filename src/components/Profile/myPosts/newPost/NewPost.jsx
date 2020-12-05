import styles from './NewPost.module.css';
import React from "react";
import {addPostActionCreator, updatePostTextActionCreator} from "../../../../redux/profileReducer";

const NewPost = ({dispatch, postText}) => {
    let addNewPost = () => {
        dispatch(addPostActionCreator());
    };

    let updateText = (event) => {
        let text = event.target.value;
        dispatch(updatePostTextActionCreator(text));
    };

    return (
        <div className={styles.posts_main}>
            <textarea onChange={updateText}
                      value={postText} />
            <button onClick={addNewPost}>Send</button>
        </div>
    )
}

export default NewPost;