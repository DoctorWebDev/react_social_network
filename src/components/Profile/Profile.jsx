import MainPhoto from './mainPhoto/MainPhoto';
import MyPosts from './myPosts/MyPosts';
import styles from './Profile.module.css';
import UserInfo from './userInfo/UserInfo';

const Profile = ({profilePage, dispatch}) => {

    return (
        <div>
            <MainPhoto/>
            <UserInfo/>
            <MyPosts profilePage={profilePage}
                     dispatch={dispatch}/>
        </div>
    )
}

export default Profile;