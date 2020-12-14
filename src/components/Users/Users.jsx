import styles from './Users.module.css';
import UserItem from "./UserItem/UserItem";
import * as axios from 'axios';
import * as React from "react";
import avatar from "../../assets/images/avatar.png";

class Users extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.setTotalPages(response.data.totalCount);
            });
    }

    onPageChanged = (pageNum) => {
        this.props.setCurrentPage(pageNum);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNum}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
            });
    }

    render() {
        let totalPages = Math.ceil(this.props.totalCount / this.props.pageSize);
        let pages = [];

        for(let i = 1; i <= totalPages; i++) {
            pages.push(i);
        }
        return (
            <div>
                <div className={styles.users_pagination}>
                    {pages.map(i => {
                        return <span onClick={() => {this.onPageChanged(i)}}
                                     className={this.props.currentPage === i && styles.selectedPage}>{i}</span>
                    })}
                </div>

                {
                    this.props.users.map(item => <div key={item.id} className={styles.userItem}>
                        <div className={styles.img}>
                            <img src={item.photos.small != null ? item.photos.small : avatar} alt=""/>
                        </div>

                        <h3 id={item.id} >{item.name}</h3>
                        <div className={styles.userDescr}>
                            <div><span className={styles.userDescr_status}>{item.status}</span></div>
                        </div>
                        <div className={styles.btn}>
                            {item.followed ?
                                <button onClick={() => {this.props.unfollow(item.id)} }>Unfollow</button> :
                                <button onClick={()=> {this.props.follow(item.id)} }>Follow</button>}

                        </div>
                    </div>)
                }


            </div>

        )
    }
}

export default Users;
