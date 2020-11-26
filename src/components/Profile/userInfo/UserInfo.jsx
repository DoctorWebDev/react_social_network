import styles from './UserInfo.module.css';

const UserInfo = () => {
  return (
    <div className={styles.content_avatar}>
      <img src="https://cdn1.iconfinder.com/data/icons/user-avatar-20/64/13-doctor-128.png" alt="" />
      <div className={styles.content_avatar_descr}>
        <h2>Name: </h2>
        <span>Date of Birth: </span>
        <span>City: </span>
        <span>Education: </span>
        <span>Web Site: </span>
      </div>
    </div>
  )
}

export default UserInfo;