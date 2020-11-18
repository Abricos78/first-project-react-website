import React from 'react'
import style from './Navbar.module.css'
import { NavLink } from 'react-router-dom';

function Navbar() {
    return (
        <div className={style.navbar}>
            <div>
                <img src="https://cdn2.iconfinder.com/data/icons/unigrid-bluetone-multimedia-vol-6/60/020_291_resume_profile_account_user_hands_hire_recruit-512.png"></img>
                <NavLink to="/profile" activeClassName={style.active}>Profile</NavLink>
            </div>
            <div>
                <img src="https://cdn3.iconfinder.com/data/icons/message-and-communication-sets/50/Icon_Lots_Text_Message-512.png"></img>
                <NavLink to="/dialogs" activeClassName={style.active}>Messages</NavLink>
            </div>
            <div>
                <img src="https://cdn2.iconfinder.com/data/icons/unigrid-phantom-multimedia-vol-1/60/020_004_music_note_key_song_tone_2-512.png"></img>
                <NavLink to="/music" activeClassName={style.active}>Music</NavLink>
            </div>
            <div>
                <img src="https://cdn0.iconfinder.com/data/icons/ikooni-outline-seo-web/128/seo2-14-512.png"></img>
                <NavLink to="/news" activeClassName={style.active}>News</NavLink>
            </div>
            <div>
                <img src="https://cdn1.iconfinder.com/data/icons/personal-business-finance-4-3/64/x-03-512.png"></img>
                <NavLink to="/settings" activeClassName={style.active}>Settings</NavLink>
            </div>
            <div>
                <NavLink to="/findFriend" activeClassName={style.active}>Find Friend</NavLink>
            </div>
        </div>
    )
}

export default Navbar