import React from 'react'
import Header from './Header'
import { authMeThunk } from '../../redux/authReducer'
import { connect } from 'react-redux'


class HeaderAPIContainer extends React.Component {

    componentDidMount() {
        this.props.authMeThunk()
    }

    render() {
        return (
            <Header login={this.props.login} />
        )
    }
}

let mapStateToProps = state => {
    return {
        login: state.auth.login
    }
},
    mapDispatchToProps = dispatch => {
        return {
            authMeThunk: () => {
                dispatch(authMeThunk())
            }
        }
    }

const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(HeaderAPIContainer)



export default HeaderContainer