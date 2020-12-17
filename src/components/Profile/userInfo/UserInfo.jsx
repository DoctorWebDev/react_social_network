import styles from './UserInfo.module.css';
import Preloader from '../../common/preloader/preloader';
import profileIcon from '../../../assets/images/profileAvatar.png'

const UserInfo = ({profileInfo}) => {
    if (!profileInfo) {
        return <Preloader/>
    }
    return (
        <div className={styles.content_avatar}>
            <img src={!profileInfo.photos.large ? profileIcon : profileInfo.photos.large} alt=""/>
            <div className={styles.content_avatar_descr}>
                <h2>Name: <span>{profileInfo.fullName}</span></h2>
                <h4>Date of Birth: <span> </span></h4>
                <h4>City: <span> </span></h4>
                <h4>About me: <span>{profileInfo.aboutMe}</span></h4>
                <h4>Web Site: <span>{profileInfo.contacts.website ? profileInfo.contacts.website : 'Отсутствует'}</span></h4>
            </div>
        </div>
    )
}

export default UserInfo;