import "./user.css";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Requirement=()=>{
    const navigate=useNavigate()

    const [user,setUser]=useState({
        name:"",mobile:"",email:"",requirement:"",address:''
    });
let name,value;
const handleInput=(e)=>{
    name=e.target.name;
    value=e.target.value;
    setUser({...user,[name]:value})
}
const sendData=async (e)=>{
    e.preventDefault();
    const {name,mobile,email,requirement,address}=user;
    const res= await fetch("/api/orders",{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify({
            name,mobile,email,requirement,address
        })
    
    })
    window.alert("we will contact you shortly thankyou ")
    navigate('/',{replace:true})


}
    return(
        <div className="div">
            
            <h1 className="heading"> Please Specify Your  details</h1>
            <form className="form">
            <label>Name: <input onChange={handleInput} name='name' value={user.name} type="text" id="username"/></label><br></br>
            <label>Mobile No: <input  onChange={handleInput} type="number" name='mobile' value={user.mobile}id="number"/></label><br></br>
            <label>Email: <input  onChange={handleInput} type="email" name='email' value={user.email}id="email"/></label><br></br>
            <label>Requirement: <input  onChange={handleInput} name='requirement' value={user.requirement}type="text" id="requirement"/></label><br></br>
            <label>Address: <input   onChange={handleInput} name='address' value={user.address}type="text" id="address"/></label><br></br>
            
            <input type="submit" onClick={sendData} className="login" ></input>
            </form>

        </div>
    )
}
export default Requirement;