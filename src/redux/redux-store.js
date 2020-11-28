import usersReducer from "./usersReducer";
import friendsReducer from "./friendsReducer";
import messagesReducer from "./messagesReducer";
import profileReducer from "./profileReducer";
import authReducer from "./authReducer";
import thunkMiddleware from 'redux-thunk'

const { createStore, combineReducers, applyMiddleware } = require("redux");

let reducers = combineReducers({
    friends: friendsReducer,
    profilePage: profileReducer,
    messagesPage: messagesReducer,
    usersPage: usersReducer,
    auth: authReducer
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware))

export default store