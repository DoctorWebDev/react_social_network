import styles from './MyPosts.module.css';
import Post from './post/Post';
import NewPost from "./newPost/NewPost";

const MyPosts = ({profilePage, onAddNewPost, onUpdateText}) => {
	let newPost = profilePage.postsData.map(post => <Post message={post.message} like={post.likeCount}/>);

	return (
		<div className={styles.content_posts}>
			<NewPost onAddNewPost={onAddNewPost}
					 onUpdateText={onUpdateText}
					 newText={profilePage.postText}/>
			{newPost}
		</div>
	)
}

export default MyPosts;