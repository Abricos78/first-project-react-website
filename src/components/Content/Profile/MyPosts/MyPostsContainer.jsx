import { connect } from 'react-redux'
import { addPostAction, changeTextareaPostAction } from '../../../../redux/profileReducer'
import MyPosts from './MyPosts'


let mapStateToProps = (state) => {
    return {
        textarea: state.profilePage.textareaContent
    }
},
    mapDispatchToProps = (dispatch) => {
        return {
            addPost: () => {
                dispatch(addPostAction())
            },
            changeTextArea: text => {
                dispatch(changeTextareaPostAction(text))
            }
        }
    }

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)




export default MyPostsContainer

