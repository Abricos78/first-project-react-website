import React from 'react'
import style from './ProfileInfo.module.css'

const ProfileInfo = props => {
    
    return (
        <div className={style.profileInfo}>
            <h3>{props.fullName}</h3>
            <p>{props.aboutMe}</p>
            <img src={props.avatar} />

        </div>

    )
}

export default ProfileInfo