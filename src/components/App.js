import React, { Component,Fragment} from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import LoadingBar from 'react-redux-loading'
import Dashboard from './Dashboard'
import NavBAr from './NavBar'
import Login from './Login'
import NewQuestion from './NewQuestion'
import LogOut from './LogOut'
import Leaderbored from './Leaderbored'
import QuestionDetails from './QuestionDetails'
import {handleInitialData} from '../actions/shared'

import '../css/App.css';
 
class App extends Component {
   componentDidMount() {
    this.props.dispatch(handleInitialData())
  } 
  render() {
    return (
      <Router>
      <Fragment>
        <LoadingBar />
        <div className='container'>
      
          {
          this.props.notloginuser === true
            ? <Route path='/' exact component={Login} />
            
            : <div>
              <NavBAr/>
                <Route path='/' exact component={Dashboard} />
                <Route path='/LogOut' exact component={LogOut} />
                <Route path="/Question/:id" component={QuestionDetails} />
                <Route path="/add" component={NewQuestion} />
                <Route path="/Leaderbored" component={Leaderbored} />
              </div>
          }
        </div>
      </Fragment>
    </Router>
  );
}
}


function mapStateToProps ({ autheduser }) {
  return {
    notloginuser: autheduser === null
  }
}

export default connect(mapStateToProps)(App)