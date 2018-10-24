import React, {Component} from 'react'
import {connect} from 'react-redux'
import {userId} from '../jwt'
import {UserPage} from './UserPage'
import {getUsers} from '../actions/users'

class UserPageContainer extends Component{

  componentDidMount(){
    if (this.props.authenticated) {
      if (this.props.users === null) this.props.getUsers()
    }
  }

  render(){
    return (
      <UserPage/>
    )
  }

}

const mapStateToProps = (state) => {
  return {
    authenticated: state.currentUser !== null,
    users: state.users, 
    userId: state.currentUser && userId(state.currentUser.jwt)
  }
}

const mapDispatchToProps = {
  getUsers,
}

export default connect(mapStateToProps, mapDispatchToProps)(UserPageContainer)