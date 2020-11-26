import styles from './NewPost.module.css';

const NewPost = () => {
  return (
    <div className={styles.posts_main}>
      <textarea type="text" />
      <button>Send</button>
    </div>
  )
}

export default NewPost;