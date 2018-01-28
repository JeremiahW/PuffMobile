import baseServiceRequest from "base-service-request";
import HttpMethodType from 'http-module-type';
import ActionPaths from "request-url-paths";

class UserLoginRequest extends baseServiceRequest{
    constructor(username, password){
        super();
        super.addRequestUri(ActionPaths.POST_USER_LOGIN);
        super.addRequestParameter("username", username);
        super.addRequestParameter("password", password);
        super.addPathParameter("index.php");
        this._methodType = HttpMethodType.POST;
    }

    getMethod(){
        return this._methodType;
    }
}

export default UserLoginRequest;