import React, {Component} from 'react'
import {connect} from 'react-redux'
import {GameDetails} from './GameDetails'

class GamePage extends Component{

  render(){
    return (
      <GameDetails/>
    )
  }

}

const mapStateToProps = (state) => {
  return {
    users: state.users
  }
}

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(GamePage)