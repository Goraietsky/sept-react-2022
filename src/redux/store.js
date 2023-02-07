import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {postsReducer} from "./slice";

const rootReducer = combineReducers({
    posts:postsReducer
});
const setupStore =()=> configureStore({
    reducer:rootReducer
});
export {
    setupStore
}