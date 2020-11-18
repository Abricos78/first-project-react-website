import { connect } from 'react-redux'
import { changeTextareaMessageAction, sendMessageAction } from '../../../redux/messagesReducer'
import Messages from './Messages'


let mapStateToProps = state => {
    return {
        messagesContent: state.messagesPage
    }
},
    mapDispatchToProps = dispatch => {
        return {
            sendMessage: () => {
                dispatch(sendMessageAction())
            },
            changeTextarea: text => {
                dispatch(changeTextareaMessageAction(text))
            }
        }
    }

const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(Messages)

export default MessagesContainer