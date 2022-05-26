import "./user.css";
import React from "react";
//import {usehistory} from "react-router-dom";
import { useNavigate } from "react-router-dom";



import { useState } from "react";
const Register=()=>{
        //const history=usehistory()
        const navigate=useNavigate()
        const [user,setUser]=useState({
            username:"",password:"",email:"",developer:""
        });
    let name,value;
    const handleInput=(e)=>{
        name=e.target.name;
        value=e.target.value;
        setUser({...user,[name]:value})
    }
const sendData=async (e)=>{
    e.preventDefault();
    const {username,password,email,developer}=user;
    const res= await fetch("/api/auth/register",{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify({
            username,password,email,developer
        })
    })
    const data = res
    if (data.status===500){
        window.alert("something went wrong")
    }
    else{
        window.alert("registration successfull")
        //history.push('login')
        navigate('/',{replace:true})
    
    }


}
    
    return(
        <div className="div">
            
            <h1 className="heading"> Please Register Your  details</h1>
            <form className="form" method="POST">
            <label>UserName: <input onChange={handleInput} type="text" name='username' value={user.username} id="username"/></label><br></br>
            <label>Password: <input onChange={handleInput} type="password" name="password" value={user.password}id="password"/></label><br></br>
            <label>Email: <input type="email" onChange={handleInput} value={user.email}name="email" id="email"/></label><br></br>
            <label>Developer:<br></br><label>yes:<input onChange={handleInput} type="radio" name="developer" id="developer"  value="true"></input></label><br></br>
            <label>No:<input type="radio" id="developer" onChange={handleInput} name="developer" value="false"></input></label></label>
        
            
            <input type="submit" onClick={sendData}  className="login" ></input>
            </form>

        </div>
    )    
}
export default Register;