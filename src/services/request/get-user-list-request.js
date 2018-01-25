import baseServiceRequest from "base-service-request";
import HttpMethodType from 'http-module-type';

class GetUserListRequest extends baseServiceRequest{
    constructor(name){
        super();
        super.addRequestUri("index/user/get");
        super.addRequestParameter("name", "name");
        this._methodType = HttpMethodType.POST;
    }

    getMethod(){
        return this._methodType;
    }
}

export default GetUserListRequest;