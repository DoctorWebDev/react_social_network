const Follow_User = 'Follow_User';
const Unfollow_User = 'Unfollow_User';
const Set_Users = 'Set_Users';

export const followAC = (userId) => ({type: Follow_User, userId});
export const unfollowAC = (userId) => ({type: Unfollow_User, userId});
export const setUsersAC = (users) => ({type: Set_Users, users});

let initialState = {
    users: [ ]
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
            return {...state, users: [...state.users, ...action.users]};
        default:
            return state;
    }
};

export default userReducer;