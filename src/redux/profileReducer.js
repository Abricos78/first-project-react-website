const ADD_POST = 'ADD-POST',
    CHANGE_TEXTAREA_POST = 'CHANGE-TEXTAREA-POST'

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
    textareaContent: '',
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

export default profileReducer


