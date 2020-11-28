import styles from './Dialogs.module.css';
import DialogsItem from "./DialogsItem/DialogsItem";
import MessageItem from "./MessageItem/MessageItem";
import MessageForm from "./MessageForm/MessageForm";

const Dialogs = () => {
    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogsList}>
                <DialogsItem name='Name' id='1' lasctText='Hi'/>
                <DialogsItem name='afa' id='2' lasctText='yo'/>
                <DialogsItem name='Name' id='3' lasctText='NO'/>
                <DialogsItem name='Name' id='4' lasctText='Yea'/>
                <DialogsItem name='Name' id='5' lasctText='By'/>
            </div>

            <div className={styles.messages}>
                <div className={styles.messageList}>
                    <MessageItem />
                    <MessageItem />
                    <MessageItem />
                </div>

                <MessageForm />

            </div>
        </div>
    )
}

export default Dialogs;
