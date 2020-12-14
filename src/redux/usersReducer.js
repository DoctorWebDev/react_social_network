const Follow_User = 'Follow_User';
const Unfollow_User = 'Unfollow_User';
const Set_Users = 'Set_Users';
const Set_Current_Page = 'Set_Current_Page';
const Set_Total_Pages = 'Set_Total_Pages';


let initialState = {
    users: [ ],
    totalCount: 20,
    currentPage: 1,
    pageSize: 5
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case Follow_User:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return {...user, followed: true};
                    }
                    return user;
                })
            }
        case Unfollow_User:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return {...user, followed: false};
                    }
                    return user;
                })
            }
        case Set_Users:
            return {...state, users: [...action.users]};
        case Set_Current_Page:
            return {...state, currentPage: action.currentPage};
        case Set_Total_Pages:
            return {...state, totalCount: action.totalCount};
        default:
            return state;
    }
};

export const followAC = (userId) => ({type: Follow_User, userId});
export const unfollowAC = (userId) => ({type: Unfollow_User, userId});
export const setUsersAC = (users) => ({type: Set_Users, users});
export const setCurrentPageAC = (currentPage) => ({type: Set_Current_Page, currentPage});
export const setTotalPagesAC = (totalCount) => ({type: Set_Total_Pages, totalCount});

export default userReducer;