import React, { Component,Fragment } from "react";
import {Row, Col,Table } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { connect } from 'react-redux';

class Leaderbored extends Component {

  


  render() {
    const {users} =this.props
  
  return(
    <Table>
    <thead>
      <tr>
        <th>Rank</th>
        <th>User Name</th>
        <th>Logo</th>
        <th>Questions Asked</th>
        <th>Questions Answered</th>
      </tr>
    </thead>
    <tbody>
        {users.map ((user, index)=>(
            <tr key={user.id}>
            <th scope="row">{index + 1}</th>
            <td>{user.name}</td>
            <td><img src={user.avatarURL} className='avatar img-logo'  alt={`Avatar of ${user.name}`}/></td>
             <td>{user.questions.length}</td>
              <td>{Object.keys(user.answers).length}</td>
            </tr>

        ))}
    
    
    </tbody>
  </Table>

 )
  }
}
function mapStateToProps ({ users}) {
    const Score =(user) => Object.keys(user.answers).length + user.questions.length;
 // console.log(" Object.values(users)",  Object.values(users))
     return {
       users : Object.values(users).sort((a, b) => Score(b) - Score(a))
      
     }
   }
 
  

export default connect(mapStateToProps, null )(Leaderbored)