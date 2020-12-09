import styles from './NewPost.module.css';
import React from "react";

const NewPost = ({onAddNewPost, onUpdateText, newText}) => {
    let addNewPost = () => {
        onAddNewPost();
    };

    let updateText = (event) => {
        let text = event.target.value;
        onUpdateText(text);
    };

    return (
        <div className={styles.posts_main}>
            <textarea onChange={updateText}
                      value={newText}/>

            <button onClick={addNewPost}>Send</button>
        </div>
    )
}

export default NewPost;