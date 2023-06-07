import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import { Link } from 'react-router-dom';



function Read() {
const setStorageData=(id,name,email)=>{

    localStorage.setItem("id",id);
    localStorage.setItem("name",name);
    localStorage.setItem("email",email);

}
    const deleteApi=(id)=>{
        axios.delete( `https://647efd4ac246f166da8fd53f.mockapi.io/crud/${id}`).then(()=>
        read()
        )

    }
    const [user,setUser]=useState([]);
const read=()=>{
    axios.get("https://647efd4ac246f166da8fd53f.mockapi.io/crud").then((resp)=>{
        setUser(resp.data);
    })
}
useEffect(()=>{
read();
},[])

  return (
   <>
   <div className='text-center'>
<Link to="/Create"> <button type='button'>create new data</button></Link></div>
   {
    user.map((item)=>{
        return(
            <>

          
         <div className='read-box'>
            <h4>
              name :  {item.name}
            </h4>
            
            <h4>
             email :   {item.email}
            </h4>
            <Link to="/Edit">
            <button type="button" onClick={()=>{setStorageData(item.id,item.name,item.email)}}>edit</button>
            </Link>
          
            <button type="button" onClick={()=>{if(window.confirm('are you sure ')){deleteApi(item.id)}}}>delete</button>
         </div>
           </>
        )
    })
   }
   </>
  );
}

export default Read;
