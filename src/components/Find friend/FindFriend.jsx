import React from 'react'
import style from './FindFriend.module.css'
import Friend from './Friend/Friend'


const FindFriend = props => {

    let allFriends = props.friends.map(friend => <Friend id={friend.id} name={friend.name} location={friend.location} status={friend.status} followed={friend.followed} clickFollow={props.clickFollow}/>)
    return (
        <div className={style.FindFriend}>
            <h3>Friends</h3>
            {allFriends}
        </div>
    )
}

export default FindFriend