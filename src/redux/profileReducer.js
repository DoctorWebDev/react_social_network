const Add_Post = 'ADD-POST';
const Update_Post_Text = 'UPDATE-POST-TEXT';

export const addPostActionCreator = () => ({type: Add_Post});
export const updatePostTextActionCreator = (text) => ({type: Update_Post_Text, newText: text});

let initialState = {
    postsData: [
        {id: 1, message: 'Hey, how are you?', likeCount: 15},
        {id: 2, message: 'Today we have nice day!', likeCount: 5}
    ],
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
            return {
                ...state,
                postText: action.newText
            };
        default:
            return state;
    }
};

export default profileReducer;