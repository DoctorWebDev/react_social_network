import styles from './MyPosts.module.css';
import NewPost from './newPost/NewPost';
import Post from './post/Post';

const MyPosts = ({postsData, addPost}) => {

	let newPost = postsData.map(post => <Post message={post.message} like={post.likeCount}/>);

	return (
		<div className={styles.content_posts}>
			<NewPost addPost={addPost}/>
			{newPost}
		</div>
	)
}

export default MyPosts;