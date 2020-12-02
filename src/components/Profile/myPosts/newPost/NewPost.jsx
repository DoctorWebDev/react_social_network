import styles from './NewPost.module.css';
import React from "react";

const NewPost = ({addPost}) => {

    let textareaData = React.createRef();

    let addNewPost = () => {
        addPost(textareaData.current.value);
        textareaData.current.value = '';
    }

    return (
        <div className={styles.posts_main}>
            <textarea ref={textareaData}/>
            <button onClick={addNewPost}>Send</button>
        </div>
    )
}

export default NewPost;