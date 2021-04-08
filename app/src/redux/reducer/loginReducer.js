const initaState = {
    isLogin: false
}
const loginReducer = (state = initaState, action) => {
    switch (action.type) {
        case "USER_lOGIN":
            return {
                ...state, isLogin: action.payload
            }
        default:
            return state
    }
}


export default loginReducer