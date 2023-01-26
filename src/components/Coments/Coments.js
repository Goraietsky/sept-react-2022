import {useEffect, useState} from "react";
import {todosService} from "../../services";
import {Coment} from "../Coment/Coment";


const Coments = () => {
    const [comments,setComents] = useState([]);

    useEffect(()=>{
        todosService.getComments().then(({data})=>setComents([...data]))
    },[])
    return (
        <div>
            {comments.map(comment=><Coment key={comment.id} comment={comment}/>)}
        </div>
    );
};

export {Coments};