
/**
 * @providesModule base-service-request
 */

class BaseServiceRequest {
    constructor() {
        this._requestCommandsParams = [];
        this._postParamValuesDict = [];
        this._requestUri = '';
        this._requestContent;
    }
    getMethod() {
        return;
    }

    getRequestUri() {
        return this.getUri();
    }
    getMessageName() {
        return;
    }
    getRequiredSecured() {
        return false;
    }
    addRequestParameter(paramName, value) {
        if (paramName) {
            this._postParamValuesDict.push({ key: paramName, value: value })
        }
    }
    addRequestUri(uri) {
        this._requestUri = uri;
    }
    addPathParameter(value) {
        this._requestCommandsParams.push(this.htmlEnc(value));
    }
    getUri() {
        let retValue;
        const reqParams = this._requestCommandsParams.join('/');
        if (reqParams) {
            retValue = `${reqParams}/${this._requestUri}`;
        }
        else {
            retValue = this._requestUri;
        }
        return retValue;
    }

    getParamaterString() {
        const parameters = [];
        for (var index = 0; index < this._postParamValuesDict.length; index++) {
            parameters.push(`${this._postParamValuesDict[index].key}=${this._postParamValuesDict[index].value}`);

        }
        return parameters.join('&');
    }

    getParametersObject(){
        const parameters = [];
        for(var index =0; index < this._postParamValuesDict.length; index++){
            parameters[this._postParamValuesDict[index].key] = this._postParamValuesDict[index].value
        }

        return {...parameters};
    }

    getContent() {
        return this._requestContent;
    }

    setContent(reqData) {
        this._requestContent = reqData;
    }

    htmlEnc(s) {
        return s.replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/'/g, '&#39;')
            .replace(/"/g, '&#34;')
    }
}

export default BaseServiceRequest;