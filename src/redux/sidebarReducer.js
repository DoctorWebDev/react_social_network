const Show_Firiends = 'Show_Friends';

let initialState = {
    friendsData: [
        {id: 1, name: 'Ivan'},
        {id: 2, name: 'Yana'},
        {id: 3, name: 'Name'},
        {id: 3, name: 'Name'},
        {id: 3, name: 'Name'},
        {id: 3, name: 'Name'}
    ]
};

const sidebarReducer = (state = initialState, action) => {
    switch (action.type) {
        case Show_Firiends:
            return state;
        default:
            return state;
    }
};

export default sidebarReducer;