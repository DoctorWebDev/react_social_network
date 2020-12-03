import styles from './NewPost.module.css';
import React from "react";

const NewPost = ({dispatch, postText}) => {

    let textareaData = React.createRef();

    let addNewPost = () => {
        dispatch({type: 'ADD-POST'});
    };

    let updateText = () => {
        let text = textareaData.current.value;
        dispatch({type: 'UPDATE-POST-TEXT', newText: text})
    };

    return (
        <div className={styles.posts_main}>
            <textarea onChange={updateText} value={postText} ref={textareaData}/>
            <button onClick={addNewPost}>Send</button>
        </div>
    )
}

export default NewPost;