import React from 'react'
import {userId} from '../jwt'
import {connect} from 'react-redux'
import { Link} from 'react-router-dom'
import dragon from '../lib/images/dragon.svg'

function Navbar (props) {
  
  return(
    <nav className="navbar navbar-expand-md bg-dark navbar-dark p-2" >
      <img className= "img-fluid ml-2 mr-3 dragon-image d-none d-sm-block" src={dragon} alt="dragon logo"/>
      <a href="/" className="navbar-brand"> 
        <h2>The Dungeon Master</h2>
      </a>
      <button className="navbar-toggler" data-toggle="collapse" data-target="#navbarNav">
                <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse py-2" id="navbarNav">
        { 
          !props.user &&
          <ul className="navbar-nav ml-auto mr-5">
            <li className="nav-item mr-2 my-2 my-md-0">
              <Link to="/login" className="btn btn-danger mx-2">Log in</Link>
            </li>
            <li className="nav-item my-md-0">
              <Link to="/signup" className="btn btn-danger">Sign up</Link>
            </li>
          </ul>
        }

        {
          props.user &&           
          <div className="collapse navbar-collapse py-2" id="navbarNav">
            <ul className="navbar-nav ml-auto mr-5">
              <li className="nav-item mr-2 my-2 my-md-0">
                <Link to={`/users/${props.user.username}`} className="btn btn-dark">
                  <i className="fas fa-user  mr-2"></i> {props.user.username}
                </Link>
              </li>
              <li className="nav-item my-2 my-md-0">
                <Link to="/logout" className="btn btn-danger">Log out</Link>
              </li>
            </ul>
          </div>
        }
      </div>
    </nav>
  )

}

const mapStateToProps = state => ({
  user: state.currentUser && state.users &&
    state.users[userId(state.currentUser.jwt)]
})

export default connect(mapStateToProps)(Navbar)
