import styles from './MessageItem.module.css';

const MessageItem = ({name, text}) => {
    return (
        <div className={styles.messageItem}>
            <img src="https://cdn4.iconfinder.com/data/icons/evil-icons-user-interface/64/avatar-256.png" alt=""/>
            <a href="">{name}</a>
            <span>{text}</span>
        </div>
    )
}

export default MessageItem;