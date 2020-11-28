import authAPI from "../api/AuthAPI"


let SET_DATA = 'SET-DATA',
    IS_AUTH_CHANGE = 'IS-AUTH-CHANGE'

let initialState = {
    userId: null,
    login: null,
    email: null,
    isAuth: false
}

const authReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_DATA:
            return {
                ...state,
                ...action.data
            }
        case IS_AUTH_CHANGE:
            return {
                ...state,
                isAuth: action.isAuth
            }
        default:
            return state
    }
}

export default authReducer

export let setData = data => {
    return {
        type: SET_DATA,
        data
    }
}

export let isAuthChange = isAuth => {
    return {
        type: IS_AUTH_CHANGE,
        isAuth
    }
}

export let authMeThunk = () => dispatch => {
    authAPI.authMe()
    .then(response => {
        if(response.resultCode === 0) {
            dispatch(setData(response.data))
        }
    }) 
}
