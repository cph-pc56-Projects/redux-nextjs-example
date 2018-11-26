const initialState = {
    name: 'Peter'
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case "CHANGE_NAME":
            return Object.assign({}, state, {
                name: action.name
            })
        default:  
            return state;
    }
}

export default reducer;