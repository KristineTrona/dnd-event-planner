import React, {Component} from 'react'
import {connect} from 'react-redux'
import {GameDetails} from './GameDetails'
import {getUsers} from '../actions/users'
import {userId} from '../jwt'

class GamePage extends Component{

  componentWillMount(){
    if (this.props.authenticated) {
      if (this.props.users === null) this.props.getUsers()
    }
  }

  render(){
    return (
      <GameDetails/>
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
  getUsers
}

export default connect(mapStateToProps, mapDispatchToProps)(GamePage)