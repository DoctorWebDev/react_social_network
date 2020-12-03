import styles from './MessageForm.module.css'
import React from "react";

const MessageForm = ({dispatch, dialogsPage}) => {

    let inputRef = React.createRef();

    let sendMessage = () => {
        dispatch({type: 'ADD-MESSAGE'})
    };

    let updateInput = () => {
        let text = inputRef.current.value;
        dispatch({type: 'UPDATE-MESSAGE-TEXT', newText: text})
    };

    return (
        <div className={styles.messageForm}>
            <input ref={inputRef}
                   value={dialogsPage.messageText}
                   onChange={updateInput}/>

            <button onClick={sendMessage}>Send</button>
        </div>
    )
}

export default MessageForm;