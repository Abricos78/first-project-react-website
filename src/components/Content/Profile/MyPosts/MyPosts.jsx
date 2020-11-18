import React from 'react'
import style from './MyPost.module.css'

const MyPosts = props => {
    let newPostElement = React.createRef()

    let addPost = () => {
        props.addPost()
    },
    changeTextArea = () => {
        props.changeTextArea(newPostElement.current.value)
    }
    
    return (
        <div className={style.myPosts}>
            <textarea onChange={changeTextArea} ref={newPostElement} value={props.textarea}></textarea>
            <button onClick={addPost} >Add post</button>
        </div>
    )
}

export default MyPosts