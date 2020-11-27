import styles from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const Dialogs = () => {
    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogsList}>
                <div className={styles.dialogsItem}>
                    <img className={styles.dialogsImg} src="https://cdn4.iconfinder.com/data/icons/evil-icons-user-interface/64/avatar-256.png" alt=""/>
                    <NavLink to='/dialogs/1' activeClassName={styles.active}>Name</NavLink>
                    <span>Someone</span>
                </div>

                <div className={styles.dialogsItem}>
                    <img className={styles.dialogsImg} src="https://cdn4.iconfinder.com/data/icons/evil-icons-user-interface/64/avatar-256.png" alt=""/>
                    <NavLink to='/dialogs/2' activeClassName={styles.active}>Name</NavLink>
                    <span>Someone</span>
                </div>

                <div className={styles.dialogsItem}>
                    <img className={styles.dialogsImg} src="https://cdn4.iconfinder.com/data/icons/evil-icons-user-interface/64/avatar-256.png" alt=""/>
                    <NavLink to='/dialogs/3' activeClassName={styles.active}>Name</NavLink>
                    <span>Someone</span>
                </div>

                <div className={styles.dialogsItem}>
                    <img className={styles.dialogsImg} src="https://cdn4.iconfinder.com/data/icons/evil-icons-user-interface/64/avatar-256.png" alt=""/>
                    <NavLink to='/dialogs/4' activeClassName={styles.active}>Name</NavLink>
                    <span>Someone</span>
                </div>
            </div>

            <div className={styles.messages}>
                <div className={styles.messageList}>
                    <div className={styles.messageItem}>
                        <img src="https://cdn4.iconfinder.com/data/icons/evil-icons-user-interface/64/avatar-256.png" alt=""/>
                        <a href="">Name</a>
                        <span>TextTextTextTextText</span>
                    </div>
                    <div className={styles.messageItem}>
                        <img src="https://cdn4.iconfinder.com/data/icons/evil-icons-user-interface/64/avatar-256.png" alt=""/>
                        <a href="">Name</a>
                        <span>TextTextTextTextText</span>
                    </div>
                    <div className={styles.messageItem}>
                        <img src="https://cdn4.iconfinder.com/data/icons/evil-icons-user-interface/64/avatar-256.png" alt=""/>
                        <a href="">Name</a>
                        <span>TextTextTextTextText</span>
                    </div>
                </div>

                <div className={styles.messageForm}>
                    <input type="text"/>
                    <button>Send</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;
