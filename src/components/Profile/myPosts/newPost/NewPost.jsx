import styles from './NewPost.module.css';
import React from "react";
import {addPostActionCreator, updatePostTextActionCreator} from "../../../../redux/state";

const NewPost = ({dispatch, postText}) => {

    let textareaData = React.createRef();

    let addNewPost = () => {
        dispatch(addPostActionCreator());
    };

    let updateText = () => {
        let text = textareaData.current.value;
        dispatch(updatePostTextActionCreator(text));
    };

    return (
        <div className={styles.posts_main}>
            <textarea onChange={updateText} value={postText} ref={textareaData}/>
            <button onClick={addNewPost}>Send</button>
        </div>
    )
}

export default NewPost;