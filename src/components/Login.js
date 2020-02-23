import React, { Component } from "react";
import { Col,Alert,Form, FormGroup, Label, Input  } from 'reactstrap';
import { connect } from 'react-redux'
import { setautheduser } from '../actions/autheduser'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/App.css';



class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userid : '',
      emptselect:true
    };
    this.handelselect = this.handelselect.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e)   {
    e.preventDefault();
    const {authentiuser } = this.props
    const { userid } = this.state;
    if (userid) {
      authentiuser(userid)
    } else {
      this.setState(() => ({
        emptselect:true
      }))
     
    }
    
    
  }  
  handelselect(e){
    
     this.setState({userid: e.target.value,emptselect:false});
      
    }
  render() {
    const {userid,emptselect} =this.state
  const { users } = this.props;
  console.log('your message',users);
  return ( 
       
       
           <Form className='login_content' onSubmit={this.handleSubmit}>
             
            {
                emptselect?
                <Alert color="danger" className='alertmrgtop'>
                  <p>
                  choice user from select menu
                  </p>                
                 </Alert>: ''
 
           
                }
                <FormGroup row>
                <Label for="exampleSelect" sm={3}>User Name</Label>
                <Col sm={9}>
                  <Input type="select"
                   name="select" 
                  id="userselect"                 
                  value={userid}
                  onChange={this.handelselect}>
                    <option value=""  disabled>Please select</option>
                   {
                  Object.keys(users).map((user) =>(
                 
                  <option key={user} value={user}>
                    {users[user].name}
                  </option>))
                   }
                  </Input>
                </Col>
              </FormGroup>
              <Col xs={{span:5, offset:5}}>
              <input disabled={userid === ''} type="submit" value="Submit" />
              </Col>
            
             
          </Form>

        
         
      );
  }
}

function mapStateToProps ({ users }) {
console.log("users all",users);
  return { users}
}
function mapDispatchToProps(dispatch) {
  return {
    authentiuser: (id) => {
      dispatch(setautheduser(id))
    }
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Login)

