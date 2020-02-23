import React, { Component } from "react";
import {Card, Button, CardTitle, CardText,Row, Col } from 'reactstrap';
import {withRouter} from 'react-router-dom'
import { connect } from 'react-redux'


class Question extends Component {
  toDetails = (e, id) => {
    e.preventDefault()
    this.props.history.push(`/Question/${id}`)
  }
  render() {
    const {users,questions} = this.props;
    const user = users[questions.author];
  return(
    <Card body>
    <CardTitle>{questions.author}</CardTitle>
    <Row>
      <Col sm={5}>
      <img src={user.avatarURL} className='img-auther-question' floated="right" size="tiny"  alt={`Avatar of ${user.name}`}/>
    
      </Col>
      <Col sm={7}>
        <div className="div-qusetion">
      <CardText>Would you rather</CardText>
      <CardText>{questions.optionOne.text}</CardText>
    <Button onClick={(e) => this.toDetails(e, questions.id)}>view poll</Button>
    </div>
      </Col>
  </Row>
  
  </Card>
  )
  }
}

function mapStateToProps ({ questions, users, autheduser},{id}) {

    return {
      users,
      autheduser,
      questions:questions[id]
    }
  }


  export default withRouter(connect(mapStateToProps, null)(Question))