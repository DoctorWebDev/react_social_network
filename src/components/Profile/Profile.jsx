import MainPhoto from './mainPhoto/MainPhoto';
import UserInfo from './userInfo/UserInfo';
import MyPostsContainer from "./myPosts/MyPostsContainer";

const Profile = ({profileInfo}) => {
    return (
        <div>
            <MainPhoto/>
            <UserInfo profileInfo={profileInfo}/>
            <MyPostsContainer />
        </div>
    )
}

export default Profile;