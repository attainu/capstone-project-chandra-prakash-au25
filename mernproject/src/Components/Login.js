import "./user.css";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


const Login=()=>{
    const navigate=useNavigate()
    
    const [user,setUser]=useState({
        username:"",password:""
    });
let name,value;
const handleInput=(e)=>{
    name=e.target.name;
    value=e.target.value;
    setUser({...user,[name]:value})
}
const sendData=async (e)=>{
    e.preventDefault();
    const {username,password}=user;
    const res= await fetch("/api/auth/login",{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify({
            username,password
        })

    })
    const data=await res.json()
    console.log(data)
    if (res.status===500 || res.status===401){
        window.alert("something went wrong")
    }
    else{
        window.alert("login successfull")
        localStorage.setItem("Token","bearer "+data.accessToken)
       // console.log(localStorage.getItem("Token"));
       navigate('/',{replace:true})

        
    
    }
}
const findData=async(e)=>{
    e.preventDefault();
const data=await fetch("/api/auth",{
    method:"Get",
    headers:{
        "content-type":"application/json",
        Authorization:localStorage.getItem("Token")
    }
}
)
const result=await data.json()
console.log(result);
}


    return(
        <div className="div">
            
            <h1 className="heading"> Please Login</h1>
            <form className="form">
            <label>UserName: <input  onChange={handleInput} name='username' value={user.username} type="text" id="username"/></label><br></br>
            <label>Password: <input  onChange={handleInput} type="password" name='password' value={user.password}id="number"/></label><br></br>
        
        
            
            <input type="submit" onClick={sendData} className="login"></input>

            </form>

        </div>
    )
}
export default Login
