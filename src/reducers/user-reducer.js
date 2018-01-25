import { UserConstant } from "../constant/user-action-types";

const initState = {
    isLoggedIn: false
};

export default (state=initState, {type, data})=>{
    switch (type){
        case UserConstant.ActionTypes.LOGIN:
            console.log("3. Reducer收到dispatch后, 进行组合state.");
            return {...state, isLoggedIn: true};
        case UserConstant.ActionTypes.LOGOUT:
            return {...state, isLoggedIn: false};
    default:
        return {...state};
    }
}