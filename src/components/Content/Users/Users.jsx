import React from 'react'
import style from './Users.module.css'
import User from './User/User'

let Users = props => {
    let allFriends = props.users.map(user => <User photoUrl={user.photos.small} id={user.id} name={user.name} location='Moscow' status={user.status || 'У меня нет статуса(((('} followed={user.followed} clickUnfollowThunk={props.clickUnfollowThunk} disableBtn={props.disableBtn} changeDisableBtn={props.changeDisableBtn} userIdDisableBtn={props.userIdDisableBtn} clickFollowThunk={props.clickFollowThunk}/>)

    let countPages = Math.ceil(props.totalCount / props.pageSize) > 30 ? 30 : Math.ceil(props.totalCount / props.pageSize),
        pages = []

    for(let i = 1; i <= countPages; i++) {
        if (props.currentPage === i) {
            pages.push(<span className={style.active}>{i}</span>)
        } else {
            pages.push(<spans onClick={ () => props.changeCurrentPage(i)}>{i}</spans>)
        }
    }


    return (
        <div className={style.FindFriend}>
            <h3>Friends</h3>
            {pages}
            {allFriends}
        </div>
    )

}

export default Users