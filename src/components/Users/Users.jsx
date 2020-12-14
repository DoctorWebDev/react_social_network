import UserItem from "./UserItem/UserItem";
import * as axios from 'axios';
import * as React from "react";

class Users extends React.Component {
    constructor(props) {
        super(props);
    }

    async componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then(response => {
                this.props.setUsers(response.data.items);
            });

        this.userItem = await this.props.users.map(item => <UserItem key={item.id}
                                                               id={item.id}
                                                               name={item.name}
                                                               status={item.status}
                                                               photos={item.photos.small}
                                                               followed={item.followed}
                                                               follow={this.props.follow}
                                                               unfollow={this.props.unfollow}/>);
    }

    render() {
        return (
            <div>
                {this.userItem}
            </div>
        )
    }
}

export default Users;
