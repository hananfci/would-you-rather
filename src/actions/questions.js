export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const SAVE_QUESTION_ANSWER = 'SAVE_QUESTION_ANSWER';
export const ADD_QUESTION = 'ADD_QUESTION';

export function receiveQuestions (questions) {
    return {
      type: RECEIVE_QUESTIONS,
      questions
      
    }
  }

  export function savequestionanswer (autheduser, qid, answer) {
    return {
      type: SAVE_QUESTION_ANSWER,
      autheduser,
      qid,
      answer
    }
  }

  export function addQuestion (question ) {
    return {
      type: SAVE_QUESTION_ANSWER,
      question
    }
  }

  