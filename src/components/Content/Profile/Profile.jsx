import React from 'react'
import MyPostsContainer from './MyPosts/MyPostsContainer'
import Post from './MyPosts/Post/Post'
import style from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo'

const Profile = props => {
    
    let postComponents = props.postsContent.map(post => <Post id={post.id} content={post.postContent} />)

    return (
        <div className={style.profile}>
            <img src="https://kartinkinaden.ru/uploads/posts/2020-07/1593659743_2-p-foni-s-kosmosom-3.jpg"></img>
                <ProfileInfo />
                    <MyPostsContainer />
                    {postComponents}
                </div>
    )

}



export default Profile