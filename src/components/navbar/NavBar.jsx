import styles from './NavBar.module.css';

const NavBar = () => {
    return (
        <nav className={styles.nav}>
            <div>
                <a href="#">Profile</a>
            </div>
            <div>
                <a href="#">Message</a>
            </div>
            <div>
                <a href="#">News</a>
            </div>
            <div>
                <a href="#">Music</a>
            </div>
            <div className={styles.last}>
                <a href="#">Settings</a>
            </div>
        </nav>
    )
};

export default NavBar;