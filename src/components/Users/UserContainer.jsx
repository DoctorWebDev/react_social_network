import Users from "./Users";
import {connect} from "react-redux";
import {followAC, setUsersAC, unfollowAC} from "../../redux/usersReducer";

let mapStateToProps = (state) => {
    return {
        users : state.usersPage.users
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId));
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId));
        },
        setUsers: (newUsers) => {
            dispatch(setUsersAC(newUsers));
        }

    }
};

const UserContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UserContainer;