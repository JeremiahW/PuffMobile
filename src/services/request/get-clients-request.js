import baseServiceRequest from "base-service-request";
import HttpMethodType from 'http-module-type';
import ActionPaths from "request-url-paths";

class GetClientsRequest extends baseServiceRequest{
    constructor(token, page, id, search_name, search_phone, search_address){
        super();
        super.addPathParameter("index.php");
        super.addRequestUri(ActionPaths.POST_GET_CLIENTS);
        super.addRequestParameter("token", token);
        super.addRequestParameter("page", page);
        if(id){
            super.addRequestParameter("id", id);
        }
        if(search_name){
            super.addRequestParameter("search_name", id);
        }
        if(search_phone){
            super.addRequestParameter("search_phone", id);
        }
        if(search_address){
            super.addRequestParameter("search_address", id);
        }

        this._methodType = HttpMethodType.POST;
    }

    getMethod(){
        return this._methodType;
    }

}

export default GetClientsRequest;

// data:{"page":data.page, "id":data.id, "search_name":data.name, "search_phone":data.phone, "search_address":data.address,token:cookie.load('token')},