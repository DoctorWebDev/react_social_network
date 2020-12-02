import MainPhoto from './mainPhoto/MainPhoto';
import MyPosts from './myPosts/MyPosts';
import styles from './Profile.module.css';
import UserInfo from './userInfo/UserInfo';

const Profile = ({profilePage, addPost}) => {

    return (
        <div>
            <MainPhoto/>
            <UserInfo/>
            <MyPosts postsData={profilePage.postsData}
                     addPost={addPost}/>
        </div>
    )
}

export default Profile;