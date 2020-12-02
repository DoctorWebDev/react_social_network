import {rerenderEntireTree} from "../render";

const state = {
    profilePage: {
        postsData: [
            {id: 1, message: 'Hey, how are you?', likeCount: 15},
            {id: 2, message: 'Today we have nice day!', likeCount: 5}
        ]
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
        ]
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
}

export const addPost = (postMessage) => {
    let newPost = {
        id: 3,
        message: postMessage,
        likeCount: 0
    };

    state.profilePage.postsData.push(newPost);
    rerenderEntireTree(state);
};

export default state;
