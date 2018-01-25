/**
 * @providesModule restful-api
 */

import axios from 'axios';
import * as appConfig from 'app-config';

class RestfulAPI{
    constructor(){

    }

   async processServiceCall(req){
       const url = this.getRequestUrl(req);
       const method = req.getMethod();
       const data = req.getParametersObject();

       console.log(`Requested method: ${method}, URL: ${url}`);
       //console.log(data);

       let start = Date.now();
       var response =  await axios({
            method: method,
            url: url,
            data: req.getParametersObject(),
            responseType: 'json', 
        });
        
        var millis = Date.now() - start;

        console.log(`Request elapsed ${Math.floor(millis/1000)}`);
        
        return response.data;
    }

    getRequestUrl(req){
        const serverName = appConfig.host;
        const uri = req.getRequestUri();
        const protocol = "http";
        return `${protocol}://${serverName}/${uri}`;;
    }
}


let restfulApi = new RestfulAPI();
export default restfulApi;