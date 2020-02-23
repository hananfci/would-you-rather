
import {RECEIVE_USERS, USER_ANSWER_QUESTION } from '../actions/users'


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
       
    default :
      return state
  }
}