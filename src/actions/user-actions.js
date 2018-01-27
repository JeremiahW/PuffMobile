
import { UserConstant } from "user-action-types";
import restfulApi from "restful-api";
import UserLoginRequest from "../services/request/user-login-request";

export function onLogin(username, password){
    console.log(`actions内的onLogin被执行, 参数username: ${username}, password: ${password}`);
    return async (dispatch, getState)=>{
        const request = new UserLoginRequest(username, password);
        let response = await restfulApi.processServiceCall(request);
        let token = "";
        let isLoggedIn = false;
        if(response.result){
            token = response.data;
            isLoggedIn = true;
        }
     
        dispatch({
            type: UserConstant.ActionTypes.LOGIN,
            data: {username:username, isLoggedIn: isLoggedIn, token:token}
        });
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