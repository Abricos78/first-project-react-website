import { connect } from 'react-redux'
import Profile from './Profile'


let mapStateToProps = state => {
    return {
        postsContent: state.profilePage.postsContent
    }
}

const ProfileContainer = connect(mapStateToProps)(Profile)

export default ProfileContainer