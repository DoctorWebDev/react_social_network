import styles from './MyPosts.module.css';
import NewPost from './newPost/NewPost';
import Post from './post/Post';

const MyPosts = ({profilePage, addPost, updatePostText}) => {

	let newPost = profilePage.postsData.map(post => <Post message={post.message} like={post.likeCount}/>);

	return (
		<div className={styles.content_posts}>
			<NewPost addPost={addPost}
					 postText={profilePage.postText}
					 updatePostText={updatePostText}/>
			{newPost}
		</div>
	)
}

export default MyPosts;