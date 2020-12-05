const Add_Message = 'ADD-MESSAGE';
const Update_Message_Text = 'UPDATE-MESSAGE-TEXT';

export const addMessageActionCreator = () => ({type: Add_Message});
export const updateMessageTextActionCreator = (text) => ({type: Update_Message_Text, newText: text});

let initialState = {
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
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case Add_Message:
            let newMess = {
                id: 4,
                name: 'MyName',
                message: state.messageText
            }

            state.messageData.push(newMess);
            state.messageText = '';
            return state;
        case Update_Message_Text:
            state.messageText = action.newText;
            return  state;
        default:
            return state;
    }
};

export default dialogsReducer;