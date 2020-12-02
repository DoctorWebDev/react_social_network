import styles from './SideBar.module.css';
import SideBarItem from "./SideBarItem/SideBarItem";

const SideBar = ({state}) => {

    let newSideItem = state.friendsData.map(item => <SideBarItem name={item.name}/>);
    return (
        <div className={styles.sideBar__wrapper}>
            <h3 >Friends</h3>

            <div className={styles.sideBar}>


                {newSideItem}
            </div>
        </div>
    )
}

export default SideBar;