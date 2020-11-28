import usersAPI from "../api/UsersAPI"

const CLICK_FOLLOW = 'CLICK-FOLLOW',
    SET_USERS = 'SET-USERS',
    SET_CURRENT_PAGE = 'SET-CURRENT-PAGE',
    IS_FETCHING_USERS_PAGE = 'IS-FETCHING-USERS-PAGE',
    DISABLE_BTN = 'DISABLE-BTN'

let initialState = {
    users: [],
    pageSize: 5,
    currentPage: 1,
    totalCount: 30,
    isFetching: true,
    disableBtn: false,
    userIdDisableBtn: []
}

const usersReducer = (state = initialState, action) => {
    switch(action.type) {
        case CLICK_FOLLOW:
            let usersCopy = [...state.users]
            usersCopy.forEach(user =>{ user.id === action.idElement ? user.followed = !user.followed : void 0})
           return {
               ...state,
               users: usersCopy
           }
        case SET_USERS: 
           return {
               ...state,
               users: action.users,
               totalCount: action.totalCount
           }
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage
            }
        case IS_FETCHING_USERS_PAGE:
            return {
                ...state,
                isFetching: action.isFetching
            }
        case DISABLE_BTN:
            
            return {
                ...state,
                disableBtn: action.disable,
                userIdDisableBtn: action.disable ? [...state.userIdDisableBtn, action.userId] : state.userIdDisableBtn.filter(id => id !== action.userId)
                

            }

        default:
            return state
    }
}

export default usersReducer

export let clickFollow = id => {
    return {
        type: CLICK_FOLLOW,
        idElement: id
    }
}

export let setUsers = (users, totalCount) => {
    return {
        type: SET_USERS,
        users,
        totalCount
    }
}

export let setCurrentPage = currentPage => {
    return {
        type: SET_CURRENT_PAGE,
        currentPage
    }
}

export let isFetchingUsersPage = isFetching => {
    return {
        type: IS_FETCHING_USERS_PAGE,
        isFetching
    }
}

export let changeDisableBtn = (disable, userId) => {
    return {
        type: DISABLE_BTN,
        disable,
        userId
    }
}

export let getUsersThunk = (currentPage, pageSize) => dispatch => {
        dispatch(isFetchingUsersPage(true))
        usersAPI.getUsers(currentPage, pageSize)
        .then(response => {
            dispatch(setUsers(response.items, response.totalCount))
            dispatch(isFetchingUsersPage(false))
        })
}

export let changeCurrentPageThunk = (page, pageSize) => dispatch => {
    dispatch(isFetchingUsersPage(true))
    dispatch(setCurrentPage(page))
    usersAPI.getUsers(page, pageSize)
    .then(response => {
        dispatch(setUsers(response.items, response.totalCount))
        dispatch(isFetchingUsersPage(false))
    })
}

export let clickUnfollowThunk = userId => dispatch => {
    dispatch(changeDisableBtn(true, userId))
    usersAPI.unfollowUser(userId)
    .then( response => {
        if (response.resultCode === 0) {
            dispatch(clickFollow(userId))
        }
        dispatch(changeDisableBtn(false, userId))
    })
}

export let clickFollowThunk = userId => dispatch => {
    dispatch(changeDisableBtn(true, userId))
    usersAPI.followUser(userId)
    .then( response => {
        if (response.resultCode === 0) {
            dispatch(clickFollow(userId))
        }
        dispatch(changeDisableBtn(false, userId))
    })
}

