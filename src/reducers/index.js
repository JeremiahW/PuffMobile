import { combineReducers } from 'redux';
import User from "./user-reducer";
import client from "./client-reducer";

export default combineReducers({
    user: User,
    client: client
});