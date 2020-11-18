const CLICK_FOLLOW = 'CLICK-FOLLOW'



let initialState = {
    friends: [
        {id:0, followed:true, name: 'Slava', location:[{city: 'Moscow'},{country: 'Russia'}], status: 'yyy'},
        {id:1, followed:false, name: 'Anna', location:[{city: 'Egorievsk'},{country: 'Russia'}], status: 'eee'},
        {id:2, followed:true, name: 'Alex', location:[{city: 'Oslo'},{country: 'Norway'}], status: 'hhh'},
        {id:3, followed:false, name: 'Max', location:[{city: 'Madrid'},{country: 'Spain'}], status: 'jjj'}
    ]
}

const findFriendReducer = (state = initialState, action) => {
    switch(action.type) {
        case CLICK_FOLLOW:
            let friendsCopy = [...state.friends]
            friendsCopy[action.idElement].followed = !friendsCopy[action.idElement].followed
           return {
               ...state,
               friends: [...friendsCopy]
           }
        default:
            return state
    }
}

export default findFriendReducer

export let clickFollowActionCreator = (id) => {
    return {
        type: CLICK_FOLLOW,
        idElement: id
    }
}

