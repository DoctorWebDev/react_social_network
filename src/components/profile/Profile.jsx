import MainPhoto from './mainPhoto/MainPhoto';
import MyPosts from './myPosts/MyPosts';
import styles from './Profile.module.css';
import UserInfo from './userInfo/UserInfo';

const Profile = () => {
	return (
		<div className={styles.content}>
			<MainPhoto />
			<UserInfo />
			<MyPosts />
		</div>
	)
}

export default Profile;