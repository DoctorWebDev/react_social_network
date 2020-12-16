const Follow_User = 'Follow_User';
const Unfollow_User = 'Unfollow_User';
const Set_Users = 'Set_Users';
const Set_Current_Page = 'Set_Current_Page';
const Set_Total_Pages = 'Set_Total_Pages';
const Toggle_Is_Loading = 'Toggle_Is_Loading';

let initialState = {
    users: [ ],
    totalCount: 0,
    currentPage: 1,
    pageSize: 5,
    isLoading: false
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
        case Toggle_Is_Loading:
            return {...state, isLoading: action.isLoading};
        default:
            return state;
    }
};

export const follow = (userId) => ({type: Follow_User, userId});
export const unfollow = (userId) => ({type: Unfollow_User, userId});
export const setUsers = (users) => ({type: Set_Users, users});
export const setCurrentPage = (currentPage) => ({type: Set_Current_Page, currentPage});
export const setTotalPages = (totalCount) => ({type: Set_Total_Pages, totalCount});
export const toggleIsLoading = (isLoading) => ({type: Toggle_Is_Loading, isLoading});

export default userReducer;