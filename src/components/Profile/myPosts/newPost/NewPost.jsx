import styles from './NewPost.module.css';
import React from "react";

const NewPost = ({onAddNewPost, onUpdateText}) => {
    let addNewPost = () => {
        onAddNewPost();
    };

    let updateText = (event) => {
        let text = event.target.value;
        onUpdateText(text);
    };

    return (
        <div className={styles.posts_main}>
            <textarea onChange={updateText} />

            <button onClick={addNewPost}>Send</button>
        </div>
    )
}

export default NewPost;