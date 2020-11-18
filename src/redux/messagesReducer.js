const SEND_MESSAGE = 'SEND-MESSAGE',
    CHANGE_TEXTAREA_MESSAGE = 'CHANGE-TEXTAREA-MESSAGE'

let initialState = {
    dialog: [{
            id: 1,
            content: 'How are you?'
        },
        {
            id: 2,
            content: 'Hi!!!'
        },
        {
            id: 3,
            content: 'I think you aren\'t right. It seems to me he wanted to pay for it.'
        },
    ],
    userDialogs: [{
            id: 1,
            name: 'Slava'
        },
        {
            id: 2,
            name: 'Aleksandr'
        },
        {
            id: 3,
            name: 'Dima'
        },
        {
            id: 4,
            name: 'Sveta'
        },
        {
            id: 5,
            name: 'Pavel'
        },
    ],
    textareaMessage: ''

}

let messagesReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            return {
                ...state,
                dialog: [...state.dialog, {id: 4, content: state.textareaMessage}],
                textareaMessage: ''
            }
        case CHANGE_TEXTAREA_MESSAGE:
            return {
                ...state,
                textareaMessage: action.content
            }
        default:
            return state
    }
}

export let sendMessageAction = () => {
    return {
        type: SEND_MESSAGE
    }
}
export let changeTextareaMessageAction = text => {
    return {
        type: CHANGE_TEXTAREA_MESSAGE,
        content: text
    }
}

export default messagesReducer