import React from 'react'
import style from './User.module.css'
import { NavLink } from 'react-router-dom';

const User = props => {
    let btnFollow = props.followed ? 'Follow' : 'Unfollow'

    let clickFollow = () => {
        if (props.followed) {
            props.clickUnfollowThunk(props.id)
        } else {
            props.clickFollowThunk(props.id)
        }
        
    }
    
    return (
        <div>
            <div className={style.friend}>
                <NavLink to={`/profile/${props.id}`}>
                <img className={style.image} src={ props.photoUrl ||"https://cdn3.iconfinder.com/data/icons/christmas-parade-1/200/Christmas_Parade4-512.png"} alt="" />
                </NavLink>
                <div className={style.information}>
                    <div className={style.name}>{props.name}</div>
                    <div className={style.location}>
                        <div className={style.city}>{props.location},</div> 
                        <div className={style.country}>{props.location}</div>
                    </div>
                    <div className={style.status}>{props.status}</div>
                </div>
                <button disabled={props.userIdDisableBtn.some(id => id === props.id)} onClick={clickFollow}>{btnFollow}</button>
            </div>
        </div>

    )
}   

export default User