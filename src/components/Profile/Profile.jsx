import MainPhoto from './mainPhoto/MainPhoto';
import MyPosts from './myPosts/MyPosts';
import styles from './Profile.module.css';
import UserInfo from './userInfo/UserInfo';

const Profile = ({store}) => {

    return (
        <div>
            <MainPhoto/>
            <UserInfo/>
            <MyPosts store={store}/>
        </div>
    )
}

export default Profile;