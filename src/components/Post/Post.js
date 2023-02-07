import {useDispatch} from "react-redux";
import {postActions} from "../../redux";

const Post = ({post}) => {
    const {id,title,body,userId} = post;
    const dispatch = useDispatch();
 return (
  <div>
      <div>id:{id}</div>
      <div>title:{title}</div>
      <div>body:{body}</div>
      <div>userId:{userId}</div>
      <button onClick={()=>dispatch(postActions.setSelectedPosts(post))}>Cleak</button>
      <button onClick={()=>dispatch(postActions.getById({id}))}>SelectAll</button>
  </div>
 );
};

export {Post};