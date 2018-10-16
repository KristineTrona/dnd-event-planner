import React from 'react'
import {userId} from '../jwt'
import {connect} from 'react-redux'
import { Link} from 'react-router-dom'

function Header (props) {
  
  return(
    <div className="header-wrapper" >
      <h1 className="header-title">The Dungeon Master</h1>
      { 
        !props.user &&
          <div className="header-buttons">
            <Link to="/login" className="log-in-button">Log in</Link>
            <Link to="/signup" className="sign-up-button">Sign up</Link>
          </div>
      }
      {
        props.user && 
        <div className="header-buttons">
          <Link to="/logout" className="log-out-button">Log out</Link>
        </div>
      }
    </div>
  )

}

const mapStateToProps = state => ({
  user: state.currentUser && state.users &&
    state.users[userId(state.currentUser.jwt)]
})

export default connect(mapStateToProps)(Header)
