import {useEffect, useState} from "react";
import {todosService} from "../../services";

const PostDetails = ({postId}) => {
    const [post,setPost]=useState(null)

    useEffect(()=>{
        todosService.getPostsById(postId).then(({data})=>setPost(data))
    },[postId])

    return (
        <div>
            {post &&
                <>
                    <div>id:{post.id}</div>
                    <div>userId:{post.userId}</div>
                    <div>title:{post.title}</div>
                    <div>body:{post.body}</div>
                </>
            }

        </div>
    );
};

export {PostDetails};