import {useEffect, useState} from "react";
import {todosService} from "../../services";
import {Post} from "../Post/Post";


const Posts = () => {
    const [posts,setPosts] = useState([]);

    useEffect(()=>{
        todosService.getPosts().then(({data})=>setPosts([...data]))
    },[])
    return (
        <div>
            {posts.map(post=><Post key={post.id} post={post}/>)}
        </div>
    );
};

export {Posts};