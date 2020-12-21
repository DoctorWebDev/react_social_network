const Set_Auth_User = 'Set_Auth_User';

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case Set_Auth_User:
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        default:
            return state;
    }
};

export const setAuthData = (userId, email, login) => ({type: Set_Auth_User, data: {userId, email, login}});

export default authReducer;