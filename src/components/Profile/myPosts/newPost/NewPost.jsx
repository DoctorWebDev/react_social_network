import styles from './NewPost.module.css';
import React from "react";

const NewPost = ({addPost, postText, updatePostText}) => {

    let textareaData = React.createRef();

    let addNewPost = () => {
        addPost();
    };

    let updateText = () => {
        let text = textareaData.current.value;
        updatePostText(text);
    };

    return (
        <div className={styles.posts_main}>
            <textarea onChange={updateText} value={postText} ref={textareaData}/>
            <button onClick={addNewPost}>Send</button>
        </div>
    )
}

export default NewPost;