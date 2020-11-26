import styles from './Post.module.css';

const Post = (props) => {
	return (
		<div className={styles.posts__new}>
			<img src="https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/12_avatar-256.png" alt="" />
			<span className={styles.post}>{props.message}</span>
			<span className={styles.like}>Like: {props.like}</span>
		</div>
	)
}

export default Post;