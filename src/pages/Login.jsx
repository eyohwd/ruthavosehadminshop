import React, { useEffect, useState } from 'react';
import { login } from '../redux/apiCall';
import { useDispatch, useSelector } from 'react-redux';

        


const Login = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const dispatch = useDispatch()
    
    
    
    const error = useSelector((state)=>state.user.error)
    const isSuccess = useSelector((state)=>state.user.isSuccess)
   // const user = useSelector((state)=>state.user.currentUser)
    console.log({username, password})

    useEffect(()=>{

    }, [isSuccess])
    
    const handleLogin = (e) => {
        e.preventDefault()
        login(dispatch, {username, password})
      
       }
       
      
    

   
  return (
    <div style={{height: "100vh",display: "flex", alignItems: 'center', justifyContent: "center"}}>
        <div  style={{display: "flex", flexDirection: "column" , alignItems: 'center', justifyContent: "center", padding: "50px 100px", backgroundColor: "gray", }} >
            <input type='text' placeholder='username' onChange={(e)=>setUsername(e.target.value)} style={{marginBottom: "20px", padding: "10px", outline: "none"  }} />
            <input type='password' onChange={(e)=>setPassword(e.target.value)}  style={{marginBottom: "20px", padding: "10px", outline: "none"}} />
            <button onClick={handleLogin} style={{width: "100px", padding: "10px", backgroundColor: "teal", color: "white", border: "none", }}>Login</button>
           { error && <span>Wrong username or password</span> }
        </div>
      
    </div>
  );
}

export default Login;
