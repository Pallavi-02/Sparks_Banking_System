import React,{useEffect,useState} from 'react';
import './styletransfer.css';
import axios from 'axios';


 const Transfer =(props)=>{
  const[user ,setUser]=useState([]);
  const[sender,setSender]=useState(0);
  const[receiver,setReceiver]=useState(0);
  const[blance,setBal]=useState(0);
  useEffect(()=>{
    axios.get('/user')
    .then(user=>{
        console.log(user)
        console.log(user.data);
        setUser(user.data)
    })
},[])
const User ={blance}
const transfers=()=>{
  console.log(sender);
  console.log(receiver);
  axios.put(`/user/${sender}/${receiver}`, User)
  .then(res=>{
    console.log(res.data);
    alert(res.data);
    
  })
}

    return(
      <div className="transfer">
        <h1 className="theading">Transfer Money</h1>
          <label>Transfered by</label>
          <select name="senders" id="senders" value={sender} onChange={(e)=>{setSender(e.target.value)}}>
              <option value=""></option>
              {
                user.map((val,key)=>{
                                return (
                                  <option value={val._id} id={val._id} key={key}>{val.name}</option>
                                )
                              })

              }
            </select>
          <label>Transfered to</label>
          <select name="receivers" id="receiver" value={receiver} onChange={(e)=>{setReceiver(e.target.value)}} required>
              <option value=""></option>
              {
             user.map((val,key)=>{
                          return (val._id===sender?
                              "":
                              <option id={val._id} value={val._id} key={key}>{val.name}</option>
                            )
                          })
              }
              </select>
          <label>Amount</label>
          <input  placeholder="&#8377;" onChange={(e)=>{setBal(e.target.value)}} value={blance}/>
          <button type="button" onClick={transfers} disabled={props.loading}>
          { props.loading && <i className="fa fa-refresh fa-spin"></i>}
          Transfer</button>
      </div>
     
    )
            };

export default Transfer;
