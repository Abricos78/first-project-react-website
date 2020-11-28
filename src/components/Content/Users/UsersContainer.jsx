import React from 'react'
import { connect } from 'react-redux'
import Users from './Users'
import { changeDisableBtn, getUsersThunk, changeCurrentPageThunk, clickFollowThunk, clickUnfollowThunk } from '../../../redux/usersReducer'
import Preloader from '../../../common/Preloader/Preloader'

class UsersAPIContainer extends React.Component {
    componentDidMount() {
        this.props.getUsersThunk(this.props.currentPage, this.props.pageSize)
    }

    changeCurrentPage(page)  {
        this.props.changeCurrentPageThunk(page, this.props.pageSize)
    }

    render() {
        if (this.props.isFetching) {
            return (
                <Preloader />
            )
        } else {
            return (
                <Users users={this.props.users} totalCount={this.props.totalCount} pageSize={this.props.pageSize} currentPage={this.props.currentPage} clickUnfollowThunk={this.props.clickUnfollowThunk} changeCurrentPage={ page => this.changeCurrentPage(page)} disableBtn={this.props.disableBtn} changeDisableBtn={this.props.changeDisableBtn} clickFollowThunk={this.props.clickFollowThunk}
                userIdDisableBtn={this.props.userIdDisableBtn} 
                 />
            )
        }
       
    }
}

let mapStateToProps = state => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        currentPage: state.usersPage.currentPage,
        totalCount: state.usersPage.totalCount,
        disableBtn: state.usersPage.disableBtn,
        userIdDisableBtn: state.usersPage.userIdDisableBtn,
        isFetching: state.usersPage.isFetching
    }
},
    mapDispatchToProps = dispatch => {
        return {
            changeDisableBtn: (disable, userId) => {
                dispatch(changeDisableBtn(disable, userId))
            },
            getUsersThunk: (currentPage, pageSize) => {
                dispatch(getUsersThunk(currentPage, pageSize))
            },
            changeCurrentPageThunk: (page, pageSize) => {
                dispatch(changeCurrentPageThunk(page, pageSize))
            },
            clickUnfollowThunk: userId => {
                dispatch(clickUnfollowThunk(userId))
            },
            clickFollowThunk: userId => {
                dispatch(clickFollowThunk(userId))
            }
        }
    }



const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPIContainer)

export default UsersContainer