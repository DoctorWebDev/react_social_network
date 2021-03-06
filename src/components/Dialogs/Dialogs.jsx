import styles from './Dialogs.module.css';
import DialogsItem from "./DialogsItem/DialogsItem";
import MessageItem from "./MessageItem/MessageItem";
import MessageForm from "./MessageForm/MessageForm";

const Dialogs = ({dialogsPage, onSendMessage, onUpdateInput}) => {

    let dialogItem = dialogsPage.dialogsData.map(item =>  <DialogsItem name={item.name}
                                                                       id={item.id} key={item.id}
                                                                       lasctText={item.lastText}/>)

    let messageItem = dialogsPage.messageData.map(mes => <MessageItem key={mes.id}
                                                                      name={mes.name}
                                                                      text={mes.message}/>)

    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogsList}>
                {dialogItem}
            </div>

            <div className={styles.messages}>
                <div className={styles.messageList}>
                    {messageItem}
                </div>

                <MessageForm onSendMessage={onSendMessage}
                             onUpdateInput={onUpdateInput}
                             newText={dialogsPage.messageText}/>

            </div>
        </div>
    )
}

export default Dialogs;
