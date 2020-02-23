import {
  _getUsers,
  _getQuestions,
  _saveQuestion,
  _saveQuestionAnswer
  
  } from './_DATA.js'
  
  export function getInitialData () {
    return Promise.all([
      _getUsers(),
      _getQuestions(),
    ]).then(([users, questions]) => ({
      users,
      questions
    }))
  }
  

  export function saveQuestion (question) {
    return _saveQuestion(question)
  }
  var obj={  }
  export function saveQuestionAnswer ({ autheduser, qid, answer }) {
    debugger;
    return _saveQuestionAnswer({ autheduser, qid, answer })
  }