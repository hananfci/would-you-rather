import { getInitialData, saveQuestionAnswer} from '../utils/api'
import { _saveQuestion} from '../utils/_DATA'
import { receiveUsers } from  '../actions/users'
import { receiveQuestions } from '../actions/questions'
import { savequestionanswer } from '../actions/questions'
import {saveUserAnswer} from '../actions/users'
import {addQuestion} from '../actions/questions'
import {addUserQuestion} from '../actions/users'
import { showLoading, hideLoading } from 'react-redux-loading'



export function handleInitialData () {
  return (dispatch) => {
    dispatch(showLoading())
    return getInitialData()
      .then(({ users, questions }) => {
        debugger;
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
    var obj={
      autheduser:autheduser,
       qid:qid,
        answer :answer
        }
    return saveQuestionAnswer(obj).then(() => {
        debugger;       
        dispatch(savequestionanswer(autheduser, qid,answer))
        dispatch(saveUserAnswer(autheduser, qid,answer))
        dispatch(hideLoading());
      })
  }
}



export function handeladdquestion (optionOneText,optionTwoText,autheduser)
{
  return (dispatch) => {
    dispatch(showLoading());
    var objadd={
      optionOneText:optionOneText,
      optionTwoText :optionTwoText,      
      author:autheduser  
          }
        return  _saveQuestion(objadd).then((question) => {
            debugger; 
          dispatch(addQuestion(question));
          dispatch(addUserQuestion(autheduser, question.id))
      })

  }

}
