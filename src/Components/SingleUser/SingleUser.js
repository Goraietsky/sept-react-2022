import {useEffect, useState} from "react";
import {userService} from "../servies/userService";
import {User} from "../User/User";

const SingleUser = () => {
    const [user,setUser]=useState(null);

    useEffect(()=>{
        userService.getById(5).then(value => value.data).then(value => setUser(value))
    },[])
 return (
  <div>
      {user && <User user={user}/>}
  </div>
 );
};

export {SingleUser};