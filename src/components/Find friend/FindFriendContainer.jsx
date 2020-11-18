import React from 'react'
import { connect } from 'react-redux'
import { clickFollowActionCreator } from '../../redux/findFriendReducer'
import FindFriend from './FindFriend'

let mapStateToProps = state => {
    return {
        friends: state.findFriendPage.friends
    }
},
    mapDispatchToProps = dispatch => {
        return {
            clickFollow: (id) => {
                dispatch(clickFollowActionCreator(id))
            }
        }
    }

const FindFriendContainer = connect(mapStateToProps, mapDispatchToProps)(FindFriend)

export default FindFriendContainer