import styles from './MessageForm.module.css'
import React from "react";

const MessageForm = ({updateMessageText, dialogsPage, addMessage}) => {

    let inputRef = React.createRef();

    let sendMessage = () => {
        addMessage();
    };

    let updateInput = () => {
        let text = inputRef.current.value;
        updateMessageText(text);
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