import {User} from "../User/User";
import {useEffect, useState} from "react";
import {userService} from "../servies";

const Users = () => {
    const [users, setUsers] =useState([]);
    const [count, setCount]=useState(0)
    const [userDetails, setUserDetails]=useState(null)


    useEffect(()=>{
        userService.getAll().then(value => value.data).then(value => setUsers([...value]))
    },[count])




 return (

  <div>
      <h1>UserDetails:</h1>
      {userDetails && <User user={userDetails}/>}

      <hr/>

      <h1>Users:</h1>
      {users.map(user => <User key={user.id} user={user} setUserDetails={setUserDetails}/>)}
  </div>
 );
};

export {Users};