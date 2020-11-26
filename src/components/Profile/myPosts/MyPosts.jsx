import styles from './MyPosts.module.css';
import NewPost from './newPost/NewPost';
import Post from './post/Post';

const MyPosts = () => {
	return (
		<div className={styles.content_posts}>
			<NewPost />
			<Post message='Hey, how are you?' like='15'/>
			<Post message='Today we have nice day!' like='5'/>
		</div>
	)
}

export default MyPosts;