import React, { Component } from "react";
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { setautheduser } from '../actions/autheduser'


class LogOut extends Component {
  componentDidMount () {
   this.props.authentiuser(null);
  }
  render() {
  
      return <Redirect to='/' />
   
  }
}

function mapDispatchToProps(dispatch) {
  return {
    authentiuser: (id) => {
      dispatch(setautheduser(id))
    }
  }
}


export default connect(null, mapDispatchToProps )(LogOut)