import styles from './MessageForm.module.css'
import React from "react";
import {addMessageActionCreator, updateMessageTextActionCreator} from "../../../redux/dialogsReducer";

const MessageForm = ({dispatch, dialogsPage}) => {

    let sendMessage = () => {
        dispatch(addMessageActionCreator());
    };

    let updateInput = (event) => {
        let text = event.target.value;
        dispatch(updateMessageTextActionCreator(text));
    };

    return (
        <div className={styles.messageForm}>
            <input value={dialogsPage.messageText}
                   onChange={updateInput}/>

            <button onClick={sendMessage}>Send</button>
        </div>
    )
}

export default MessageForm;