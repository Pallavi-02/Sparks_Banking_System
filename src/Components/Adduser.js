import React, { useEffect, useState } from 'react';
import {useHistory}   from 'react-router-dom'
import axios from 'axios';
import './styleadduser.css'

const Adduser = () => {
      const history =useHistory();
      const[name,setName]=useState('')
      const[email,setEmail]=useState('')
      const[currentblance,setCurrentblance]=useState(0)
       const user ={name ,email,currentblance}
    const submit=(e)=>{
    //    console.log(user);
        e.preventDefault();
        axios.post('/createuser',user)
        .then(res=>{
            // console.log(res);
        })
        alert('User Added successfully');
        history.push('/')
    }
    return (
        <div class="adduser">
                <div className="theading"><h1>Add New user</h1></div>
                    <form  class="form" autocomplete="off" onSubmit={(e)=>submit(e)}>
                        <lable>User Name</lable>
                        <input type="text" required name="firstname" placeholder="First Name"
                         value={name}
                         onChange={(e)=>setName(e.target.value)}/>
                         <lable>Email</lable>
                        <input type="email" required name="email" placeholder="Email"
                         value={email}
                         onChange={(e)=>setEmail(e.target.value)}/>
                         <lable>Enter Current Balance</lable>
                        <input type="number" required name="phone" placeholder="Current Blance "
                         value={currentblance}
                         onChange={(e)=>setCurrentblance(e.target.value)}/>
                        <button class="btn " type="submit">submit</button>
                    </form>
                </div>
      
    );
};

export default Adduser;