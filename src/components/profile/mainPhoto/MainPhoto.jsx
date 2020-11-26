import styles from './MainPhoto.module.css';

const MainPhoto = () => {
  return (
      <div className={styles.content_main_img}>
        <img src="https://images.pexels.com/photos/395196/pexels-photo-395196.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
      </div>
  )
}

export default MainPhoto;