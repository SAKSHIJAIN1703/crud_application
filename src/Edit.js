import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate}  from 'react-router-dom';
function Edit() {
    const navigate = useNavigate();
    const [id,setId]=useState(0)
    const [name,setName]=useState('')
    const [email,setEmail]=useState('')

    useEffect(()=>{
setId(localStorage.getItem('id'));
setName(localStorage.getItem('name'));
setEmail(localStorage.getItem('email'));
    },[])

    const updateData=(e)=>{
e.preventDefault();
axios.put(`https://647efd4ac246f166da8fd53f.mockapi.io/crud/${id}`,{name,email}).then(()=>{
navigate('/')
})
    }
  return (
    <>
        <form onSubmit={updateData}>
    <input type="text"  value={name} onChange={(e)=>{setName(e.target.value)}}  />
    <input type="email"  value={email} onChange={(e)=>{setEmail(e.target.value)}} />
    <button type="submit">submit</button>
  </form>
    </>

  )
}

export default Edit