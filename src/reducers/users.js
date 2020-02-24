
import {RECEIVE_USERS, USER_ANSWER_QUESTION ,USER_ADD_QUESTION } from '../actions/users'


export default function users (state = {}, action) {
  switch (action.type) {

      case RECEIVE_USERS :
      return { ...state, ...action.users };
      case USER_ANSWER_QUESTION :
        const {autheduser} =action;
        return{
          ...state,
          [autheduser]:{
            ...state[autheduser],
            answers: {
              ...state[autheduser].answers,
              [action.qid]: action.answer
            }
          }
       
        };
        case USER_ADD_QUESTION:
          return {
            ...state,
            [action.authedUser]: {
              ...state[action.authedUser],
              questions: state[action.authedUser].questions.concat([action.qid])
            }
          };
    default :
      return state
  }
}