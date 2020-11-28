import profileAPI from "../api/ProfileAPI"

const ADD_POST = 'ADD-POST',
    CHANGE_TEXTAREA_POST = 'CHANGE-TEXTAREA-POST',
    SET_USER_PROFILE = 'SET-USER-PROFILE',
    IS_FETCHING_PROFILE_PAGE = 'IS-FETCHING-PROFILE-PAGE'

let initialState = {
    postsContent: [{
            id: 1,
            postContent: 'Hello'
        },
        {
            id: 2,
            postContent: 'Hello, World!'
        },
        {
            id: 3,
            postContent: 'My names Sviatoslav'
        },
    ],
    profileInfo: {},
    textareaContent: '',
    isFetching: true
}

let profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                textareaContent: '',
                postsContent: [...state.postsContent, {id: 4, postContent: state.textareaContent}]
            }
        case CHANGE_TEXTAREA_POST:
            return {
                ...state,
                textareaContent: action.content
            }
        case SET_USER_PROFILE:
            return {
                ...state,
                profileInfo: action.profileInfo
            }
        case IS_FETCHING_PROFILE_PAGE:
            return {
                ...state,
                isFetching: action.isFetching
            }
        default:
            return state
    }
}


export let addPostAction = () => {
    return {
        type: ADD_POST
    }
}
export let changeTextareaPostAction = text => {
    return {
        type: CHANGE_TEXTAREA_POST,
        content: text
    }
}

export let setUserProfile = profileInfo => {
    return {
        type: SET_USER_PROFILE,
        profileInfo
    }
}

export let isFetchingProfilePage = isFetching => {
    return {
        type: IS_FETCHING_PROFILE_PAGE,
        isFetching
    }
}

export let profileThunk = userId => dispatch => {
    dispatch(isFetchingProfilePage(true))
    profileAPI.getUserProfile(userId)
    .then(response => {
        dispatch(setUserProfile(response))
        dispatch(isFetchingProfilePage(false))
    })
}

export default profileReducer


