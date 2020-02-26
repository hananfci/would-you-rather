import React, { Component,Fragment } from 'react'
import { Menu } from 'semantic-ui-react'
import { NavLink ,withRouter} from 'react-router-dom'
import { connect } from 'react-redux'
import User from './User'
class NavBAr extends Component {
  state = { activeItem: '' }
  render(){
    const { autheduser } = this.props;
    const { activeItem } = this.state
  return (
    
    <Fragment>
    {
    autheduser &&
    <Menu pointing secondary>
      <Menu.Item
        name='home'
        as={NavLink}
        exact to="/"
        active={activeItem === 'home'}
      />
      <Menu.Item
        name='New Question'
        as={NavLink}
        exact to="/add"
        active={activeItem === 'NewQuestion'}
      />
      <Menu.Item
        name='Leader Board'
        as={NavLink}
        exact to="/Leaderbored"        
        active={activeItem === 'LeaderBoard'}
      />
       
      <Menu.Menu position='right'>
            <User id={autheduser} />
            <Menu.Item
              name='LogOut'
              as={NavLink}
              to="/LogOut"
              active={activeItem === 'LogOut'}
      
        />
      </Menu.Menu>
     
    
    </Menu>
    }
   
  </Fragment>
  
  
 );
}
}

function mapStateToProps ({ autheduser }) {

  return {
    
    autheduser
  }
}



export default withRouter(connect(mapStateToProps,null) (NavBAr))