import styles from './DialogsItem.module.css';
import {NavLink} from "react-router-dom";

const DialogsItem = (props) => {

    let id = `/dialogs/${props.id}`;

    return (
        <div className={styles.dialogsItem}>
            <img src="https://cdn4.iconfinder.com/data/icons/evil-icons-user-interface/64/avatar-256.png" alt=""/>
            <NavLink to={id} activeClassName={styles.active}>{props.name}</NavLink>
            <span>{props.lasctText}</span>
        </div>
    )
}

export default DialogsItem;