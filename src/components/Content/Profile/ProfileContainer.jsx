import React from 'react'
import { connect } from 'react-redux'
import Preloader from '../../../common/Preloader/Preloader'
import {profileThunk} from '../../../redux/profileReducer'
import Profile from './Profile'
import {withRouter} from 'react-router-dom'

class ProfileAPIContainer extends React.Component {

    
    componentDidMount() {
        let userId = this.props.match.params.userId
        userId = !userId ? 12714 : userId
        this.props.profileThunk(userId)
    }
    
    render() {
        if (this.props.isFetching) {
            return (
                <Preloader />
            )
        } else {
            return (
                <Profile postsContent={this.props.postsContent} profileInfo={this.props.profileInfo} />
            )
        }
        
    }
}

let mapStateToProps = state => {
    return {
        postsContent: state.profilePage.postsContent,
        profileInfo: state.profilePage.profileInfo,
        isFetching: state.profilePage.isFetching
    }
},
    mapDispatchToProps = dispatch => {
        return {
            profileThunk: userId => {
                dispatch(profileThunk(userId))
            }
        }
    }

let withRouterContainer = withRouter(ProfileAPIContainer)

const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(withRouterContainer)

export default ProfileContainer