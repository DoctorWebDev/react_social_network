const Add_Post = 'ADD-POST';
const Update_Post_Text = 'UPDATE-POST-TEXT';
const Add_Message = 'ADD-MESSAGE';
const Update_Message_Text = 'UPDATE-MESSAGE-TEXT';

let store = {
    _state: {
        profilePage: {
            postsData: [
                {id: 1, message: 'Hey, how are you?', likeCount: 15},
                {id: 2, message: 'Today we have nice day!', likeCount: 5}
            ],
            postText: ''
        },
        dialogsPage: {
            dialogsData: [
                {id: 1, name: 'Name', lastText: 'Hi'},
                {id: 2, name: 'Ivan', lastText: 'yo'},
                {id: 3, name: 'Name', lastText: 'NO'},
                {id: 4, name: 'Yana', lastText: 'Yea'},
                {id: 5, name: 'Name', lastText: 'By'}
            ],
            messageData: [
                {id: 1, name: 'Ivan', message: 'yo'},
                {id: 2, name: 'Name', message: 'Yea'},
                {id: 3, name: 'Yana', message: 'No'}
            ],
            messageText: ''
        },
        sideBar: {
            friendsData: [
                {id: 1, name: 'Ivan'},
                {id: 2, name: 'Yana'},
                {id: 3, name: 'Name'},
                {id: 3, name: 'Name'},
                {id: 3, name: 'Name'},
                {id: 3, name: 'Name'}
            ]
        }
    },
    _callSubscriber() {

    },

    getState() {
        return this._state;
    },
    subscriber(observer) {
        this._callSubscriber = observer;
    },

    _addPost() {
        let newPost = {
            id: 3,
            message: this._state.profilePage.postText,
            likeCount: 0
        };

        this._state.profilePage.postsData.push(newPost);
        this._state.profilePage.postText = '';
        this._callSubscriber(this._state);
    },
    _updatePostText(newText) {
        this._state.profilePage.postText = newText;
        this._callSubscriber(this._state);
    },
    _addMessage() {
        let newMess = {
            id: 4,
            name: 'MyName',
            message: this._state.dialogsPage.messageText
        }

        this._state.dialogsPage.messageData.push(newMess);
        this._state.dialogsPage.messageText = '';
        this._callSubscriber(this._state);
    },
    _updateMessageText(newText) {
        this._state.dialogsPage.messageText = newText;
        this._callSubscriber(this._state);
    },

    dispatch(action) {
        if (action.type === Add_Post) {
            this._addPost();
        } else if (action.type === Update_Post_Text) {
            this._updatePostText(action.newText);
        } else if (action.type === Add_Message) {
            this._addMessage();
        } else if (action.type === Update_Message_Text) {
            this._updateMessageText(action.newText);
        }
    }

};

export const addPostActionCreator = () => ({type: Add_Post});
export const updatePostTextActionCreator = (text) => ({type: Update_Post_Text, newText: text});

export const addMessageActionCreator = () => ({type: Add_Message});
export const updateMessageTextActionCreator = (text) => ({type: Update_Message_Text, newText: text});

window.store = store;

export default store;
