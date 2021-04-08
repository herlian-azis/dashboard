import { createStore, applyMiddleware,combineReducers  } from "redux"
import { loginReducer , errorHandling ,userReducer} from '../reducer/index'
import thunk from 'redux-thunk'


const reducers = combineReducers({
    loginReducer , errorHandling,userReducer
})
const store = createStore(reducers , applyMiddleware(thunk))

export default store