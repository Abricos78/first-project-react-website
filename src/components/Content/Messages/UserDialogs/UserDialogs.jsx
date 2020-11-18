import React from 'react'
import style from './UserDialogs.module.css'
import { NavLink } from 'react-router-dom';

const UserDialogs = props => {
    return (
        <div className={style.UserDialogs}>
            <NavLink to={`/dialogs/${props.id}`}>{props.name}</NavLink>
        </div>
    )
}

export default UserDialogs