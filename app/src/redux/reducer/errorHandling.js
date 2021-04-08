const initaState = {
    error: []
}

const errorHandling = (state = initaState, action) => {
    switch (action.type) {
        case "ERROR_lOGIN":
            return {
                ...state, error: action.payload
            }
        default:
            return state
    }
}


export default errorHandling