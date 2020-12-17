const Add_Post = 'ADD-POST';
const Update_Post_Text = 'UPDATE-POST-TEXT';
const  Set_Profile_Info = 'Set_Profile_Info';

let initialState = {
    postsData: [
        {id: 1, message: 'Hey, how are you?', likeCount: 15},
        {id: 2, message: 'Today we have nice day!', likeCount: 5}
    ],
    profileInfo: null,
    postText: ''
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case Add_Post:
            return {
                ...state,
                postsData: [...state.postsData, {id: 3, message: state.postText, likeCount: 0}],
                postText: ''
            };
        case Update_Post_Text:
            return {...state, postText: action.newText};
        case Set_Profile_Info:
            return {...state, profileInfo: action.profileInfo};
        default:
            return state;
    }
};

export const addPostActionCreator = () => ({type: Add_Post});
export const updatePostTextActionCreator = (text) => ({type: Update_Post_Text, newText: text});
export const setProfileInfo = (profileInfo) => ({type: Set_Profile_Info, profileInfo});

export default profileReducer;