import React from 'react'
import style from './Friends.module.css'

const Friends = props => {
let friendsName = props.friendsContent.map(friend => <div>{friend.friendName}</div>)

    return (
        <div className={style.friends}>
            {friendsName}
        </div>
    )
}

export default Friends