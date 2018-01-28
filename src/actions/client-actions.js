import restfulApi from "restful-api";
import { ClientConstant } from "client-action-types";
import GetClientsRequest from "../services/request/get-clients-request";

export function getClients(page, id=null, name=null, phone=null, address=null){
    return async (dispatch, getState)=>{
        const {user} = getState(); 
        const request = new GetClientsRequest(user.token, page, id, name, phone, address);
        let response = await restfulApi.processServiceCall(request);
         
        const {data, totalPages, pageSize} = response;
        dispatch({
            type:ClientConstant.ActionTypes.GET,
            data:{rows:data, totalPages:totalPages, pageSize:pageSize}
        })
    }
}

export function addClient(){

}

export function updateClient(){

}

export function deleteClient(){
    
}