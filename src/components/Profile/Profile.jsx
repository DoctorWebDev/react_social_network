import MainPhoto from './mainPhoto/MainPhoto';
import MyPosts from './myPosts/MyPosts';
import styles from './Profile.module.css';
import UserInfo from './userInfo/UserInfo';

const Profile = ({profilePage, addPost, updatePostText}) => {

    return (
        <div>
            <MainPhoto/>
            <UserInfo/>
            <MyPosts profilePage={profilePage}
                     addPost={addPost}
                     updatePostText={updatePostText}/>
        </div>
    )
}

export default Profile;