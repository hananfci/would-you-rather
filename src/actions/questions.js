export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const SAVE_QUESTION_ANSWER = 'SAVE_QUESTION_ANSWER';

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

  