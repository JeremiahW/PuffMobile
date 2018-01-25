import { createLogger } from 'redux-logger'
import { LoggerType } from '../constant/logger';

export const logger = createLogger({
    //Options can be referenced by https://github.com/evgenyrodionov/redux-logger 
    duration: false, // print the duration of each action?
    timestamp: true, // print the timestamp with each action?
    level: {
        prevState: (prevState)=>{return LoggerType.Log;},
        action:(action) =>{return LoggerType.Log},
        nextState: (nextState)=>{return LoggerType.Log},
        error: (error, prevState)=>{return LoggerType.Error}
    },
    diff: true,
    diffPredicate: (getState, action)=>{
        //Filter states diff for certain cases.
        return true;
    },
    collapsed: (getState, action, logEntry) => {
        //展开错误.  其余的都是收起来的.
        return !logEntry.error
    },
    titleFormatter: (action, time, took)=>{
        return `action @ ${time} ${action.type} (in ${took.toFixed(2)} ms)`;
    },
    stateTransformer: (state)=>{
        //在打印显示之前, 可以把显示状态修改一下.
        return state;
    },
    actionTransformer: (action)=>{
        //在打印显示之前, 可以把action修改一下.
        return action;
    },
    predicate: (getState, action)=>{
        //console.log(action.type);
       // console.log(action.payload);
      //记录哪些行为, 可以通过action.type判断, 来不记录某些Action.
        return true;
    },
    logger:console,
    
    // colors: ColorsObject, // colors for title, prev state, action and next state: https://github.com/evgenyrodionov/redux-logger/blob/master/src/defaults.js#L12-L18
});