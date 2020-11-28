import styles from './MessageItem.module.css';

const MessageItem = () => {
    return (
        <div className={styles.messageItem}>
            <img src="https://cdn4.iconfinder.com/data/icons/evil-icons-user-interface/64/avatar-256.png" alt=""/>
            <a href="">Name</a>
            <span>TextTextTextTextText</span>
        </div>
    )
}

export default MessageItem;