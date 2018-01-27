import { UserConstant } from "../constant/user-action-types";

const initState = {
    isLoggedIn: false
};

export default (state=initState, {type, data})=>{
    switch (type){
        case UserConstant.ActionTypes.LOGIN:
            return {...state, ...data};
        case UserConstant.ActionTypes.LOGOUT:
            return {...state, isLoggedIn: false};
    default:
        return {...state};
    }
}