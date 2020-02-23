import { getInitialData, saveQuestionAnswer} from '../utils/api'
import { receiveUsers } from  '../actions/users'
import { receiveQuestions } from '../actions/questions'
import { savequestionanswer } from '../actions/questions'
import {saveUserAnswer} from '../actions/users'
import { showLoading, hideLoading } from 'react-redux-loading'



export function handleInitialData () {
  return (dispatch) => {
    dispatch(showLoading())
    return getInitialData()
      .then(({ users, questions }) => {
        dispatch(receiveUsers(users))
        dispatch(receiveQuestions(questions))
        dispatch(hideLoading())
      })
  }
}
export function handlesavequestionanswer (autheduser, qid, answer) {
  return (dispatch) => {
    dispatch(showLoading());
    debugger;
    return saveQuestionAnswer(autheduser, qid,answer)
      .then(() => {
        dispatch(savequestionanswer(autheduser, qid,answer))
        dispatch(saveUserAnswer(autheduser, qid,answer))
        dispatch(hideLoading());
      })
  }
}

