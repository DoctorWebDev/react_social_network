import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import sidebarReducer from "./sidebarReducer";

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
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sideBar = sidebarReducer(this._state.sideBar, action);
        this._callSubscriber(this._state);
    }

};

window.store = store;

export default store;
