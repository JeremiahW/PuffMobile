
import { UserConstant } from "user-action-types";

export function onLogin(username, password){
    console.log(`2. actions内的方法被执行, 参数username: ${username}, password: ${password}`);
    return dispatch=>{
        dispatch({
            type: UserConstant.ActionTypes.LOGIN,
            data: {username:username, password:password}
        })
    }
}

export function onLogOff(username){
    return dispatch=>{
        dispatch({
            type:UserConstant.ActionTypes.LOGOUT,
            data: {username:username, password:password},
        })
    }
}