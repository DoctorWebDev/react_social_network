import styles from './Dialogs.module.css';
import DialogsItem from "./DialogsItem/DialogsItem";
import MessageItem from "./MessageItem/MessageItem";
import MessageFormContainer from "./MessageForm/MessageFormContainer";

const Dialogs = ({store}) => {

    let state = store.getState();

    let dialogItem = state.dialogsPage.dialogsData.map(item =>  <DialogsItem name={item.name}
                                                                       id={item.id} key={item.id}
                                                                       lasctText={item.lastText}/>)

    let messageItem = state.dialogsPage.messageData.map(mes => <MessageItem key={mes.id}
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

                <MessageFormContainer store={store}/>

            </div>
        </div>
    )
}

export default Dialogs;
