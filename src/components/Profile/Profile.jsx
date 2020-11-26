import MainPhoto from './mainPhoto/MainPhoto';
import MyPosts from './myPosts/MyPosts';
import styles from './Profile.module.css';
import UserInfo from './userInfo/UserInfo';

const Profile = () => {
    return (
        <div>
            <MainPhoto/>
            <UserInfo/>
            <MyPosts/>
        </div>
    )
}

export default Profile;