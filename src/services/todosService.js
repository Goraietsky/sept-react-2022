import {axiosService} from "./axiosService";
import {urls} from "../configs";

const todosService={
    getTodos:()=>axiosService.get(urls.todos),
    getComments:()=>axiosService.get(urls.comments),
    getAlbums :()=>axiosService.get(urls.albums),
    getPosts:()=>axiosService.get(urls.posts),
    getPostsById:(id)=>axiosService.get(`${urls.posts}/${id}`)
}

export {
    todosService
}