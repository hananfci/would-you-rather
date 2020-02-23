import { combineReducers } from 'redux'
import autheduser from './autheduser'
import users from './users'
import questions from './questions'
import { loadingBarReducer } from 'react-redux-loading'

export default combineReducers({
 autheduser,
  users,
  questions,
  loadingBar: loadingBarReducer,
})