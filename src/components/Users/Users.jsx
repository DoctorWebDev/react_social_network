import styles from './Users.module.css';
import * as React from "react";
import avatar from "../../assets/images/avatar.png";
import Preloader from "../common/preloader/preloader";
import {NavLink} from "react-router-dom";

const Users = (props) => {
    let totalPages = Math.ceil(props.totalCount / props.pageSize);
    let pages = [];

    for(let i = 1; i <= totalPages; i++) {
        pages.push(i);
    }

    return (
        <>
            <div className={styles.users_pagination}>
                {pages.map(i => {
                    return <span onClick={() => {props.onPageChanged(i)}}
                                 className={props.currentPage === i && styles.selectedPage}>{i}</span>
                })}
            </div>


            {props.isLoading ? <Preloader/> : props.users.map(item => <div key={item.id} className={styles.userItem}>
                    <div className={styles.img}>
                        <NavLink to={'/profile/' + item.id}>
                            <img src={item.photos.small != null ? item.photos.small : avatar} alt=""/>
                        </NavLink>
                    </div>
                    <h3 id={item.id} >{item.name}</h3>
                    <div className={styles.userDescr}>
                        <div><span className={styles.userDescr_status}>{item.status}</span></div>
                    </div>
                    <div className={styles.btn}>
                        {item.followed ?
                            <button onClick={() => {props.unfollow(item.id)} }>Unfollow</button> :
                            <button onClick={()=> {props.follow(item.id)} }>Follow</button>}

                    </div>
                </div>)
            }
        </>
    )

};

export default Users;
