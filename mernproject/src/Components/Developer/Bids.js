import "../user.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Bids =()=>{
  const navigate=useNavigate()

      const [user,setUser]=useState({
        username:"",mobile:"",email:"",acceptorder:""
    });
    let name,value;
    const handleInput=(e)=>{
    name=e.target.name;
    value=e.target.value;
    setUser({...user,[name]:value})
    }
    const sendData=async (e)=>{
    e.preventDefault();
    const {username,mobile,email,acceptorder}=user;
    const res= await fetch("/api/bids/bids",{
        method:"POST",
        headers:{"Content-Type":"application/json",
        "token":localStorage.getItem("Token"),

      },
        body:JSON.stringify({
            username,mobile,email,acceptorder
        })
        
      
      })
      window.alert("we will contact you shortly thankyou ")
      navigate('/developer/orders',{replace:true})

    }

    
    return (
      <div className="div">
            
      <h1 className="heading"> Please Specify Your  details</h1>
      <form className="form">
      <label>Name: <input onChange={handleInput} name='username' value={user.username} type="text" id="username"/></label><br></br>
      <label>Mobile No: <input  onChange={handleInput} type="number" name='mobile' value={user.mobile}id="number"/></label><br></br>
      <label>Email: <input  onChange={handleInput} type="email" name='email' value={user.email}id="email"/></label><br></br>
      <label>Accept Order: <input  onChange={handleInput} name='acceptorder' value={user.acceptorder}type="text" id="requirement"/></label><br></br>
    
      
      <input type="submit" onClick={sendData} className="login" ></input>
      </form>

  </div>
)
}
export default Bids;