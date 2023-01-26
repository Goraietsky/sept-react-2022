import {PostDetails} from "../../components";
import {useParams} from "react-router-dom";

const PostDetailsPage = () => {
    const {postId} = useParams();
 return (
  <div>
   <PostDetails postId={postId}/>
  </div>
 );
};

export {PostDetailsPage};