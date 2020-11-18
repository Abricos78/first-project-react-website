import findFriendReducer from "./findFriendReducer";
import friendsReducer from "./friendsReducer";
import messagesReducer from "./messagesReducer";
import profileReducer from "./profileReducer";

const { createStore, combineReducers } = require("redux");

let reducers = combineReducers({
    friends: friendsReducer,
    profilePage: profileReducer,
    messagesPage: messagesReducer,
    findFriendPage: findFriendReducer
})

let store = createStore(reducers)

export default store