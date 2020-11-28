import styles from './MessageForm.module.css'

const MessageForm = () => {
    return (
        <div className={styles.messageForm}>
            <input type="text"/>
            <button>Send</button>
        </div>
    )
}

export default MessageForm;