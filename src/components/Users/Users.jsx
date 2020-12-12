import styles from './Users.module.css';
import UserItem from "./UserItem/UserItem";
import * as axios from 'axios';

const Users = ({users, follow, unfollow, setUsers}) => {
    let getUsers = () => {
        if(users.length === 0 ) {
            axios.get('https://social-network.samuraijs.com/api/1.0/users')
                .then(response => {
                    setUsers(response.data.items);
                })
        }
    }


    let userItem = users.map(item => <UserItem key={item.id}
                                               id={item.id}
                                               name={item.name}
                                               status={item.status}
                                               photos={item.photos.small}
                                               followed={item.followed}
                                               follow={follow}
                                               unfollow={unfollow}/>);

    return (
        <div>
            <button onClick={getUsers}>getUsers</button>

            {userItem}
        </div>
    )
}

export default Users;
