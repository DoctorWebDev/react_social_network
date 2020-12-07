import styles from './MyPosts.module.css';
import Post from './post/Post';
import NewPostContainer from "./newPost/NewPostContainer";

const MyPosts = ({store}) => {
	let state = store.getState();
	let newPost = state.profilePage.postsData.map(post => <Post message={post.message} like={post.likeCount}/>);

	return (
		<div className={styles.content_posts}>
			<NewPostContainer store={store}/>
			{newPost}
		</div>
	)
}

export default MyPosts;