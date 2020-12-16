import Users from "./Users";
import {connect} from "react-redux";
import {
    follow,
    setCurrentPage,
    setTotalPages,
    setUsers,
    toggleIsLoading,
    unfollow
} from "../../redux/usersReducer";
import * as axios from "axios";
import * as React from "react";

class UsersClassContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.toggleIsLoading(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.toggleIsLoading(false);
                this.props.setUsers(response.data.items);
                this.props.setTotalPages(response.data.totalCount);
            });
    }

    onPageChanged = (pageNum) => {
        this.props.setCurrentPage(pageNum);
        this.props.toggleIsLoading(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNum}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.toggleIsLoading(false);
                this.props.setUsers(response.data.items);
            });
    }

    render() {
        return (
            <div>
                <Users  users={this.props.users}
                        currentPage={this.props.currentPage}
                        onPageChanged={this.onPageChanged}
                        totalCount={this.props.totalCount}
                        pageSize={this.props.pageSize}
                        unfollow={this.props.unfollow}
                        follow={this.props.follow}
                        isLoading={this.props.isLoading}
                />


            </div>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        users : state.usersPage.users,
        totalCount: state.usersPage.totalCount,
        currentPage: state.usersPage.currentPage,
        pageSize: state.usersPage.pageSize,
        isLoading: state.usersPage.isLoading
    }
};
/*
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
        },
        setCurrentPage: (pageNum) => {
            dispatch(setCurrentPageAC(pageNum));
        },
        setTotalPages: (count) => {
            dispatch(setTotalPagesAC(count));
        },
        toggleIsLoading: (isLoading) => {
            dispatch(toggleIsLoadingAC(isLoading))
        }

    }
};
*/

const UserContainer = connect(mapStateToProps, {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setTotalPages,
    toggleIsLoading
})(UsersClassContainer);

export default UserContainer;