export const RECEIVE_USERS = 'RECEIVE_USERS'
export const USER_ANSWER_QUESTION = 'USER_ANSWER_QUESTION';
export const USER_ADD_QUESTION = 'USER_ADD_QUESTION';
export function receiveUsers (users) {
  return {
    type: RECEIVE_USERS,
    users,
  }
}
export function saveUserAnswer (autheduser, qid, answer) {
  return {
    type: USER_ANSWER_QUESTION,
    autheduser,
    qid,
    answer
  }
}
export function addUserQuestion(autheduser,qid){
  return{
    trpe:USER_ADD_QUESTION,
    autheduser,
    qid
  }
}