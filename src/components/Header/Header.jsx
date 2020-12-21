import styles from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <header className={styles.header}>
            <img src="https://cdn3.iconfinder.com/data/icons/social-media-2169/24/social_media_social_media_logo_imo-256.png" alt="" />

            <div className={styles.loginBlock}>
                {props.isAuth ? <h3>{props.login}</h3> : <NavLink to='/login'>Login</NavLink>}
            </div>
        </header>
    )
};

export default Header;