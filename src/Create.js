import React,{useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './App.css';



function Create() {
    const navigate = useNavigate();
const [name,setName]=useState("");
const [email,setEmail]=useState("");

const submit=(e)=>{
  e.preventDefault();
  axios.post("https://647efd4ac246f166da8fd53f.mockapi.io/crud",{name,email}).then(()=>{
   navigate('/')
  }).catch((error)=>{
      console.log(error)
    })



}
  return (
    <div className="Create">
<form onSubmit={submit}>
  <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}} />
  <input type="text" value={email} onChange={(e)=>{setEmail(e.target.value)}} />
  <button type="submit">submit</button>
</form>
    </div>
  );
}

export default Create;
