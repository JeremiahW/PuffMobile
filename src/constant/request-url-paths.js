
/**
 * @providesModule request-url-paths
 */

const ActionPaths = {
    POST_GET_CLIENTS: "index/client/get",
    POST_SAVE_CLIENT: "index/client/save",
    POST_GET_MEMBERLEVEL: "index/client/getLevels",
    
    POST_GET_ITEMS: "index/item/get",
    POST_SAVE_ITEMS: "index/item/save",
    
    POST_SAVE_ORDER: "index/order/save",
    GET_ORDER_LIST: "index/order/get",
    GET_ORDER_STATUS: "index/order/getStatus",
    GET_CLIENT_BALANCE: "index/order/getBalance",
    
    GET_PREPAID_LIST: "index/prepaid/get",
    POST_PREPAID: "index/prepaid/save",
    
    POST_USER_LOGIN: "index/user/login",
    GET_USER_STATE: "index/user/state",
    USER_LOG_OUT: "index/user/logoff",
    
    REPORT_MONTHLY_INCOME: "index/order/monthlyIncome"
}

export default ActionPaths;


