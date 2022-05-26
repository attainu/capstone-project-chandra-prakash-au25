import 'bootstrap/dist/css/bootstrap.css';
import "./style.css";
import './search/search.css';
import { useEffect,useState } from 'react';
import { useNavigate } from "react-router-dom";



const Orders=()=>{
  const navigate=useNavigate()

    const [data,setData]=useState([])
    const fetchData = () => {
      

        fetch("/api/orders/orders",{
          method:"GET",
          headers:{"Content-Type":"application/json",
                    "token":localStorage.getItem("Token"),
                  
        
        }})
          .then(response => {
            return response.json()
          })
          .then(data => {
            setData(data)
            
          })
      }
      const [inputText, setInputText] = useState("");

      let inputHandler = (e) => {
        //convert input text to lower case
        var lowerCase = e.target.value.toLowerCase();
        setInputText(lowerCase);
        console.log(lowerCase)
        
    
      };
      const filteredData = data.filter((el) => {
        //if no input the return the original
        if (inputText === '') {
            return el;
        }
        //return the item which contains the user input
        else {
            return el.requirement.toLowerCase().includes(inputText)
        }
    })
    const Delete=(e)=>{
      console.log(e.target.value)
      fetch(`/api/orders/${e.target.value}`,{
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

    console.log(filteredData)
    useEffect(() => {
        fetchData()
        

      }, [])
    
    return(
        <div className="card" >
          <div>
  
    <div className="main">
      <h1>Search</h1>
      <div className="search">
        <input
          type="text"
          id="outlined-basic"
          onChange={inputHandler}
          variant="outlined"
          fullWidth
          label="Search"
        />
      </div>

    </div>
    

          
          { filteredData.length>0 && filteredData.map((val)=>{
            return( 
          <div className="card-body">
            <p className="card-title">{val._id}</p>
            <p className="card-text">{val.name}</p>
            <p className="card-text">{val.mobile}</p>
            <p className="card-text">{val.requirement}</p>
            <p className="card-text">{val.email}</p>
            <p className="card-text">{val.address}</p>
            <button onClick={Delete} value={val._id}>delete</button>
          </div>
)
            
            })}


        </div></div>

    )
}
export default Orders;