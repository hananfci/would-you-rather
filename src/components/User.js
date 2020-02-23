import React, { Component } from "react";
import { connect } from 'react-redux'
//import { users } from '../actions/users'


class User extends Component {
 
  render() {
     
    const {users,id}= this.props;
    const user = users[id]
    
  return(
  
    <div className="ui right floated item info-mrg-top" position='right'>
           <span style={{ marginRight: "10px" }}>hello, {user.name}</span>
        <img src={user.avatarURL} className='avatar img-logo' alt={`Avatar of ${user.name}`}/>
     
  
 
  </div>
  )
  }
}

function mapStateToProps ({ users},{id}) {
 // console.log("test users",users)
    return {
      id,
      users
    }
  }


export default connect(mapStateToProps, null )(User)