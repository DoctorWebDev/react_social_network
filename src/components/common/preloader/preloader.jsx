import styles from './preloader.module.css';
import preloaderImg from '../../../assets/images/preloaderSvg.svg'

const Preloader = () => {
    return (
        <div className={styles.preloader}>
            <img src={preloaderImg} alt=""/>
        </div>
    )
};

export default Preloader;