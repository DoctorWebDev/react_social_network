import styles from './NavBar.module.css';

const NavBar = () => {
    return (
        <nav className={styles.nav}>
            <div>
                <a className={styles.active} href='/profile'>Profile</a>
            </div>
            <div>
                <a href='/dialogs'>Message</a>
            </div>
            <div>
                <a href='/news'>News</a>
            </div>
            <div>
                <a href='/music'>Music</a>
            </div>
            <div className={styles.last}>
                <a href='/settings'>Settings</a>
            </div>
        </nav>
    )
};

export default NavBar;