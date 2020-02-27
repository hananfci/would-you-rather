import React, { Component,Fragment } from "react";
import {Card, Button, CardTitle, CardText,Row, Col,FormGroup,Input,Form } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {handeladdquestion} from '../actions/shared'
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom'

class NewQuestion extends Component {
  constructor(props) {
    super(props);
    this.state = {
        optionOnetext :'',
        optionTwotext:'',
        redirect: false
    
    };
    this.handleOptionOneChange = this.handleOptionOneChange.bind(this);
    this.handleOptionTwoChange = this.handleOptionTwoChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

 
 handleOptionOneChange = (event) => {
  event.preventDefault();
  this.setState({
    optionOnetext : event.target.value
  })
  console.log("option one", this.state.optionOnetext)
};

handleOptionTwoChange = (event) => {
  event.preventDefault();
  this.setState({
    optionTwotext : event.target.value
  })
  console.log("option two", this.state.optionTwotext)
};
  handleSubmit(e) {
  e.preventDefault();
 
  const {autheduser,handleaddnewquestion} = this.props;
 
  const { optionOnetext,optionTwotext } = this.state;


 handleaddnewquestion(optionOnetext,optionTwotext,autheduser)
 this.setState({
  redirect :true
})
  }
   
  


  render() {
   
   const {optionOnetext,optionTwotext,redirect} = this.state
   if (redirect) {
    return <Redirect to='/' />
  }
  return(

 <Form onSubmit={this.handleSubmit}>
 <Row>
 <Col sm="12" md={{ size: 6, offset: 3 }}>
     <Fragment>
<Card body>
<CardTitle>Create New Question</CardTitle>
<Row>

 <Col md={12}>
   <div className="div-add-qusetion">
   <CardText>complete the question</CardText>
 <CardText>Would you rather</CardText>
 <CardText>
 <FormGroup>

 <Input type="text" name="optionone" value={optionOnetext} placeholder="Enter option one text here" onChange={this.handleOptionOneChange}/>
</FormGroup>
<FormGroup>
<Input type="text" name="optiontwo" value={optionTwotext} placeholder="Enter option two text here" onChange={this.handleOptionTwoChange} />
</FormGroup>
 </CardText>
 <Button>Submit</Button>
</div>
 </Col>
</Row>  
</Card>
</Fragment>
</Col>
</Row>

</Form>

 )
  }
}
function mapStateToProps ({ autheduser}) {
   console.log("new question users",autheduser)
     return {
      autheduser
      
     }
   }
 
   function mapDispatchToProps(dispatch) {
    return {
      handleaddnewquestion: (optionOneText,optionTwoText,autheduser) => {
        dispatch(handeladdquestion(optionOneText,optionTwoText,autheduser))
      }
    }
  }

export default connect(mapStateToProps, mapDispatchToProps )(NewQuestion)