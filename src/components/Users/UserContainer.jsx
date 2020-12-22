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
import * as React from "react";
import {apiUserData} from "../../api/api";

class UsersClassContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.toggleIsLoading(true);
        apiUserData.getUser(this.props.currentPage, this.props.pageSize).then(data => {
                this.props.toggleIsLoading(false);
                this.props.setUsers(data.items);
                this.props.setTotalPages(data.totalCount);
            });
    }

    onPageChanged = (pageNum) => {
        this.props.setCurrentPage(pageNum);
        this.props.toggleIsLoading(true);
        apiUserData.getUser(pageNum, this.props.pageSize).then(data => {
                this.props.toggleIsLoading(false);
                this.props.setUsers(data.items);
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