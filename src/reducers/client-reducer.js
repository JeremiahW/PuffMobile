import { ClientConstant } from "client-action-types";
const initState = {
};

export default (state=initState, {type, data})=>{
    switch (type){
        case ClientConstant.ActionTypes.GET:
            return {...state, ...data};
        case ClientConstant.ActionTypes.ADD:
            return {...state, ...data};
        case ClientConstant.ActionTypes.DELETE:
            return {...state, ...data};
        case ClientConstant.ActionTypes.UPDATE:
            return {...state, ...data};
    default:
        return {...state};
    }
}