import MainPhoto from './mainPhoto/MainPhoto';
import styles from './Profile.module.css';
import UserInfo from './userInfo/UserInfo';
import MyPostsContainer from "./myPosts/MyPostsContainer";

const Profile = () => {

    return (
        <div>
            <MainPhoto/>
            <UserInfo/>
            <MyPostsContainer />
        </div>
    )
}

export default Profile;