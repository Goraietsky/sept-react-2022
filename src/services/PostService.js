import {axiosService} from "./AxiosService";
import {urls} from "../configs";

const PostService={
    getAll:()=>axiosService.get(urls.posts),
    getById:(id)=>axiosService.get(`${urls.posts}/${id}`)
}
export {
    PostService
}