import styles from './UserItem.module.css';
import avatar from '../../../assets/images/avatar.png';

const UserItem = ({id, followed, photos, name, status, follow, unfollow}) => {
    return (
        <div className={styles.userItem}>
            <div className={styles.img}>
                <img src={photos != null ? photos : avatar} alt=""/>
            </div>

            <h3 id={id} >{name}</h3>
            <div className={styles.userDescr}>
                <div><span className={styles.userDescr_status}>{status}</span></div>
            </div>
            <div className={styles.btn}>
                {followed ?
                    <button onClick={() => {unfollow(id)} }>Unfollow</button> :
                    <button onClick={()=> {follow(id)} }>Follow</button>}

            </div>
        </div>
    )
};

export default UserItem;