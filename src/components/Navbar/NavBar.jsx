import styles from './NavBar.module.css';
import {NavLink} from "react-router-dom";

const NavBar = () => {
    return (
        <nav className={styles.nav}>
            <div>
                <NavLink to='/profile' activeClassName={styles.active}>Profile</NavLink>
            </div>
            <div>
                <NavLink to='/dialogs' activeClassName={styles.active}>Message</NavLink>
            </div>
            <div>
                <NavLink to='/news' activeClassName={styles.active}>News</NavLink>
            </div>
            <div>
                <NavLink to='/music' activeClassName={styles.active}>Music</NavLink>
            </div>
            <div className={styles.last}>
                <NavLink to='/settings' activeClassName={styles.active}>Settings</NavLink>
            </div>
        </nav>
    )
};

export default NavBar;