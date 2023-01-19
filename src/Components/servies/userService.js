import {axiosService} from "./axiosService";

const userService ={
    getAll:()=>axiosService('/users'),
    getById:(id)=>axiosService(`/users/${id}`)
}


export {
    userService
}