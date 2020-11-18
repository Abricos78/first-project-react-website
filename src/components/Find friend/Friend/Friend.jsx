import React from 'react'
import style from './Friend.module.css'

const Friend = props => {
    debugger

    let btnFollow = props.followed ? 'Follow' : 'Unfollow'

    let clickFollow = (event) => {
        props.clickFollow(+event.target.id)
    }

    return (
        <div>
            <div className={style.friend}>
                <img className={style.image} src="https://cdn3.iconfinder.com/data/icons/christmas-parade-1/200/Christmas_Parade4-512.png" alt="" />
                <div className={style.information}>
                    <div className={style.name}>{props.name}</div>
                    <div className={style.location}>
                        <div className={style.city}>{props.location[0].city},</div> 
                        <div className={style.country}>{props.location[1].country}</div>
                    </div>
                    <div className={style.status}>{props.status}</div>
                </div>
                <button id={props.id} onClick={clickFollow}>{btnFollow}</button>
            </div>
        </div>

    )
}   

export default Friend