import React from "react";
import {addMessageActionCreator, updateMessageTextActionCreator} from "../../../redux/dialogsReducer";
import MessageForm from "./MessageForm";

const MessageFormContainer = ({store}) => {

    let onSendMessage = () => {
        store.dispatch(addMessageActionCreator());
    };

    let onUpdateInput = (text) => {
        store.dispatch(updateMessageTextActionCreator(text));
    };

    return <MessageForm onSendMessage={onSendMessage}
                        onUpdateInput={onUpdateInput}/>
}

export default MessageFormContainer;