import styles from './MessageForm.module.css'
import React from "react";

const MessageForm = () => {

    let inputRef = React.createRef();

    let sendMessage = () => {
        console.log(inputRef.current.value);
        inputRef.current.value = '';
    };

    return (
        <div className={styles.messageForm}>
            <input ref={inputRef} type="text"/>
            <button onClick={sendMessage}>Send</button>
        </div>
    )
}

export default MessageForm;