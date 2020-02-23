
import {RECEIVE_QUESTIONS,SAVE_QUESTION_ANSWER} from '../actions/questions'



export default function questions (state = {}, action) {
  switch (action.type) {

      case RECEIVE_QUESTIONS :
      return { ...state, ...action.questions };

      case SAVE_QUESTION_ANSWER :
        const {autheduser, qid, answer} = action;
        return {
          ...state,
          [qid]: {
            ...state[qid],
            [answer]: {
              ...state[qid][answer],
              votes: [...state[qid][answer].votes, autheduser]
            }
          }
        };
    default :
      return state
  }
} 