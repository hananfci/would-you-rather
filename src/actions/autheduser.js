export const SET_AUTHED_USER ="SET_AUTHED_USER"
export const SET_UNAUTHED_USER = "SET_UNAUTHED_USER"

export  function setautheduser (id){
    return {
        type:SET_AUTHED_USER,
        id
    };
}
export function unsetautheduser(){
    return {
        type:SET_UNAUTHED_USER
    }
}
