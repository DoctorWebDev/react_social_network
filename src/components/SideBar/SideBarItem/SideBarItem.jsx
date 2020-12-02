import styles from './SideBarItem.module.css';

const SideBarItem = ({name}) => {
    return (
        <div className={styles.sideBarItem}>
            <img src="https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/12_avatar-256.png" alt=""/>
            <div>
                <a href="#">{name}</a>
            </div>
        </div>
    )
}

export default SideBarItem;