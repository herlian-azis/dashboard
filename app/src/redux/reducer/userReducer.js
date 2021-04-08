const initaState = {
    terdaftar: []
}
const userReducer = (state = initaState, action) => {
    switch (action.type) {
        case "UMKM_TERDAFTAR":
            return {
                ...state, terdaftar: action.payload
            }
        default:
            return state
    }
}


export default userReducer