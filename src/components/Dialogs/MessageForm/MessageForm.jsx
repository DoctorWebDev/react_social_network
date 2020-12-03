import styles from './MessageForm.module.css'
import React from "react";
import {addMessageActionCreator, updateMessageTextActionCreator} from "../../../redux/state";

const MessageForm = ({dispatch, dialogsPage}) => {

    let inputRef = React.createRef();

    let sendMessage = () => {
        dispatch(addMessageActionCreator());
    };

    let updateInput = () => {
        let text = inputRef.current.value;
        dispatch(updateMessageTextActionCreator(text));
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