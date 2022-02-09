const INITIAL_STATE = {
    currentUser: null
}

//every reducer gets every singal action that ever gets fired 
//as such we want a defualt return state for the ones this reducer
// is not involved in 
const userReducer =(state = INITIAL_STATE, action) => {
    switch (action.type) {
        
        case 'SET_CURRENT_USER':
            return {
            ...state,
            currentUser: action.payload    
            };
        default:
            return {state};
    }

};

export default userReducer; 