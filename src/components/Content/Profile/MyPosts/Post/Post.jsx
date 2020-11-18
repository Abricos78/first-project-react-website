import React from 'react'
import style from './Post.module.css'

const Post = (props) => {
    return (
        <div className={style.post}>
            {props.content}
        </div>
    )
}

export default Post