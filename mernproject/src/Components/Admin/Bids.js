import 'bootstrap/dist/css/bootstrap.css';
import { useEffect,useState } from 'react';
import "./style.css";
import { useNavigate } from "react-router-dom";


const Bids=()=>{
    const navigate=useNavigate()

    const [data,setData]=useState([])
    useEffect(()=>{
        fetch("/api/bids/bid",
        {
            method:"GET",
            headers:{"Content-Type":"application/json",
                      "token":localStorage.getItem("Token"),
                    
          
          }})
.then((result)=>{
            result.json().then((res)=>{
                console.log(res);
                setData(res)
            })
        })
    },[])
    const Delete=(e)=>{
            console.log(e.target.value)
            fetch(`/api/bids/${e.target.value}`,{
              method:"DELETE",
          headers:{"Content-Type":"application/json",
                    "token":localStorage.getItem("Token"),


    }})
          .then(response => {
                return response.json()
          })
          .then(data => {
                setData(data)
        
      })
      navigate('/admin',{replace:true})

  }


    return(
        <div className="card">
        {data.length>0 && data.map((val)=>{
            return(

                <div className="card-body">
                <h5 className="card-title">{val._id}</h5>
                <p className="card-text">{val.username}</p>
                <p className="card-text">{val.email}</p>
                <p className="card-text">{val.acceptorder}</p>
                <p className="card-text">{val.createdAt}</p>
                <p className="card-text">{val.updatedAt}</p>
                <p className="card-text">{val._v}</p>
                <button onClick={Delete} value={val._id}>delete</button>

                     
              </div>
      
            )
        })}
                    
    

        </div>

    )
}
export default Bids;