import React, { Component,Fragment } from "react";
import {Card, Button, CardTitle, CardText,Row, Col,FormGroup,Label,Input,Progress,Form } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {handlesavequestionanswer} from '../actions/shared'
import { connect } from 'react-redux';


class QuestionDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      anweredselect :''
    
    };
    this.handelchoice = this.handelchoice.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handelchoice(e){   
    //alert( e.target.value) 
  this.setState({anweredselect : e.target.value});   
 }

 handleSubmit(e) {
  e.preventDefault();
 
  const {autheduser,handleanswer} = this.props
 
   const { id } =this.props.match.params;
  const { anweredselect } = this.state;
  //alert(autheduser);
  //alert(anweredselect);
  //alert(id);

  handleanswer(autheduser,id,anweredselect)
 
  }
  
  


  render() {
    const {users,question,isanswered,voteCountOptionOne,voteCountOptionTwo,totalVotes,votePercentOptionOne,votePercentOptionTwo,optionselect} = this.props;
    const user = users[question.author];
 
  return(

    isanswered?
    <Row>
 <Col sm="12" md={{ size: 6, offset: 3 }}>
     <Fragment>
<Card body>
<CardTitle> Asked By {question.author}</CardTitle>
<Row>
 <Col sm={5}>
 <img src={user.avatarURL} className='img-auther-answer' floated="right" size="tiny"  alt={`Avatar of ${user.name}`}/>

 </Col>
 <Col sm={7}>
   <div className="div-result">
 <CardText >Results</CardText>
 <CardText>
 {optionselect === "optionOne"?
 <Col sm={12}>

            <div className='userchoice'> 
                
                    <Label  className='your-vote' >
                      Your Vote
                    </Label>
                
                  <p>{question.optionOne.text}</p>
                  
                  <div className="text-center">{votePercentOptionOne}</div>
                  <Progress value={votePercentOptionOne}/>
                  {voteCountOptionOne} out of {totalVotes} votes

            </div>
    
            <div className='otherchoice'>
                    
                  
                  <p>{question.optionTwo.text }</p>
                                
                    <div className="text-center">{votePercentOptionTwo}</div>
                    <Progress value={votePercentOptionTwo}/>
                    {voteCountOptionTwo} out of {totalVotes} votes



              </div>
</Col>
:
<Col sm={12} className='nopd'>


<div className='userchoice'>
                
                <Label className='your-vote'>
                  Your Vote
                </Label>
            
    
                <p>{question.optionTwo.text }</p>
                            
                            <div className="text-center">{votePercentOptionTwo}</div>
                            <Progress value={votePercentOptionTwo}/>
                            {voteCountOptionTwo} out of {totalVotes} votes

            

        </div>

        <div className='otherchoice'>
                
        <p>{question.optionOne.text}</p>
              
              <div className="text-center">{votePercentOptionOne}</div>
              <Progress value={votePercentOptionOne}/>
              {voteCountOptionOne} out of {totalVotes} votes



          </div>

 </Col>
}
 </CardText>
 
</div>
 </Col>
</Row>  
</Card>
</Fragment>
</Col>
</Row>
    :

 <Form  onSubmit={this.handleSubmit}>
 <Row>
 <Col sm="12" md={{ size: 6, offset: 3 }}>
     <Fragment>
<Card body>
<CardTitle>{question.author}</CardTitle>
<Row>
 <Col sm={5}>
 <img src={user.avatarURL} className='img-auther-question' floated="right" size="tiny"  alt={`Avatar of ${user.name}`}/>

 </Col>
 <Col sm={7}>
   <div className="div-qusetion">
 <CardText>Would you rather</CardText>
 <CardText>
 <FormGroup check>
<Label check>
 <Input type="radio" value="optionOne" name="radio1" onChange={this.handelchoice} />
 {question.optionOne.text}
</Label>
</FormGroup>
<FormGroup check>
<Label check>
 <Input type="radio" value="optionTwo" name="radio1" onChange={this.handelchoice} />
 {question.optionTwo.text}
</Label>
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


  function mapStateToProps ({ questions, users, autheduser }, props) {
    const user = users[autheduser];

    const answers = users[autheduser].answers;
    console.log("answers object",answers)
 
    const { id } = props.match.params;
    const queanswered =Object.keys(user.answers)
    console.log("queanswered",queanswered)
    const isanswered = queanswered.includes(id)

    const question =questions[id]
    console.log("question select",question)
    const  optionselect = answers[question.id]
    console.log("optionselect",optionselect)


    const votedForOptionOne = question.optionOne.votes.includes(autheduser);
    const votedForOptionTwo = question.optionTwo.votes.includes(autheduser);
    const voteCountOptionOne = question.optionOne.votes.length;
    const voteCountOptionTwo = question.optionTwo.votes.length;
    const totalVotes = voteCountOptionOne + voteCountOptionTwo;
    const votePercentOptionOne =
      Math.round((voteCountOptionOne / totalVotes) * 10000) / 100;
    const votePercentOptionTwo =
      Math.round((voteCountOptionTwo / totalVotes) * 10000) / 100;


     console.log("que",isanswered)
  return {
    users,
    autheduser,
    question,
    isanswered,
    votedForOptionOne,
    votedForOptionTwo,
    voteCountOptionOne,
    voteCountOptionTwo,
    totalVotes,
    votePercentOptionOne,
    votePercentOptionTwo
  }
}
function mapDispatchToProps(dispatch) {
  return {
    handleanswer: (autheduser, qid, answer) => {
      dispatch(handlesavequestionanswer(autheduser, qid, answer))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps )(QuestionDetails)