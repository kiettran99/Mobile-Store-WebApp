const userReducerDefaultState = {
    username: '',
    id: '',
    name: ''
};

export default (state = userReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_USER':
            return {
                ...action.user
            };
        case 'REMOVE_USER':
            return {
                username: '',
                id: '',
                name: ''
            };
        default:
            return state;
    }
};