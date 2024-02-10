import axios from "axios";
import { useEffect, useState } from "react";
import Visibility from "@mui/icons-material/Visibility";
import ThumbUp from "@mui/icons-material/ThumbUp";
import DeleteIcon from "@mui/icons-material/Delete";
import "../Styles/Userview.css"
const Userview = () => {
    let[data1,setdata1]=useState([])
    useEffect(()=>{
          axios.get("http://localhost:1000/ Vedio")
          .then((res)=>{
            // console.log(res.data);
            setdata1(res.data)
          })
          .catch((err)=>{
             console.log(err);
          })
    },[])
    let remove=(id,title)=>{
        axios.delete(`http://localhost:1000/ Vedio/${id}`)
        .then((res)=>{
                  alert(`${title} removed succesfully`)
        })
        .catch((err)=>{
            alert("invalid")
        })
    }
    
    return (
        <div className="userview">
            {/* <h1>userview</h1> */}
            {data1.map((x)=>{
                return(
                    <div className="div1">
                        <iframe width="560" height="315" src={x.vediourl} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        <h1>{x.title}</h1>
                        <p>{x.description}</p>
                        <div className="div2">
                            <span><Visibility/> {x.views}</span>
                            <span><ThumbUp/>{x.likes}</span>
                           <button onClick={()=>{remove(x.id,x.title)}}>Delete</button>
                            <button>Edit</button>
                            
                        </div>
                    </div>
                    
                    

                )
            })}
            
        </div>
      );
}
 
export default Userview;