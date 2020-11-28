import React from 'react'
import style from './Header.module.css'
import { NavLink } from 'react-router-dom';

const Header = props => {
    let welcome = props.login ? `Hello, ${props.login}` : 'Авторизируйтесь.'
    return (
        <div className={style.header}>
            <img src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-64.png" alt="beautiful place"></img>
            <NavLink to="/profile/12714" className={style.login}>{welcome}</NavLink>
        </div>
    )
} 

export default Header