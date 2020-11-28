import React from 'react'
import MyPostsContainer from './MyPosts/MyPostsContainer'
import Post from './MyPosts/Post/Post'
import style from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo'
import spaceImg from '../../../assets/img/space.jpg'


const Profile = props => {
    
    let postComponents = props.postsContent.map(post => <Post id={post.id} content={post.postContent} />)

    return (
        <div className={style.profile}>
            <img src={spaceImg} />
                <ProfileInfo avatar={props.profileInfo.photos.small} fullName={props.profileInfo.fullName} aboutMe={props.profileInfo.aboutMe}/>
                    <MyPostsContainer />
                    {postComponents}
        </div>
    )

}



export default Profile