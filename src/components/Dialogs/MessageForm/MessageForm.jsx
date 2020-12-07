import styles from './MessageForm.module.css'
import React from "react";

const MessageForm = ({onSendMessage, onUpdateInput}) => {

    let sendMessage = () => {
        onSendMessage();
    };

    let updateInput = (event) => {
        let text = event.target.value;
        onUpdateInput(text);
    };

    return (
        <div className={styles.messageForm}>
            <input onChange={updateInput}/>

            <button onClick={sendMessage}>Send</button>
        </div>
    )
}

export default MessageForm;