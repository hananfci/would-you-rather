import React, {Fragment,Component} from 'react';
import { connect } from 'react-redux'
import {Tabs, Tab} from 'react-bootstrap-tabs';
import { Row, Col} from 'reactstrap';
import Question from './Question';


  class Dashboard extends Component {
 
    render() {
      const {unansweredQuestions,answeredQuestions,lenghanswer,lenghunanswer} = this.props;
      console.log("answerd",answeredQuestions);
      console.log("unanswered",unansweredQuestions);

  return (
    <Row>
      <Col sm="12" md={{ size: 6, offset: 3 }}>
          <Fragment>

          <Tabs className="tab-container-with-green-border" headerClass="tab-header-bold" activeHeaderClass="tab-header-blue" contentClass="tab-content-yellow">
          

                          <Tab label={<span>Unanswered Questions <span className=" icon-remove" > {lenghunanswer}</span></span>} >
                    
                          <Row>
                              { 
                              unansweredQuestions.map(unanswerqusid =>

                                <Col sm={12} key={unanswerqusid}>
                                  <Question id={unanswerqusid} />
                                </Col>
                            )
                            }
                          </Row>
                        </Tab>
                          <Tab label= {<span>Answered Questions <span className=" icon-remove" > {lenghanswer}</span></span>}>
                          <Row>
                          { 
                            answeredQuestions.map(answerqusid =>

                                <Col sm={12} key={answerqusid}>
                                  <Question id={answerqusid}/>
                                </Col>
                            )
                            }
                        
                        </Row>                       
                          </Tab>               
                      </Tabs>
      </Fragment>
        
   </Col>
</Row>

);
}
  }
  function mapStateToProps ({ questions, users, autheduser }) {
    
    const user = users[autheduser];

    const answeredQuestions = Object.keys(user.answers)
    .sort((a,b) => questions[b].timestamp - questions[a].timestamp);

    const unansweredQuestions = Object.keys(questions).filter(qid => !answeredQuestions.includes(qid))
    .sort((a,b) => questions[b].timestamp - questions[a].timestamp)
   // console.log("unanswertttttt",unansweredQuestions)
    const lenghanswer =answeredQuestions.length;
   const lenghunanswer =unansweredQuestions.length;
  /*   console.log("len answer",lenghanswer)
    console.log("len unanswered",lenghunanswer) */
    return {
      unansweredQuestions, answeredQuestions,lenghanswer,lenghunanswer
    }
  }
  
  export default connect(mapStateToProps)(Dashboard)
