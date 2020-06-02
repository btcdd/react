import React, { useState, useEffect } from "react"
import { Redirect } from "react-router-dom"
import styles from '../css/LoginForm.css';
import axios from 'axios';

import queryString from 'query-string';


const API_URL = 'http://localhost:8088/compiletest/api/training/auth';
const API_HEADERS={
   'Content-Type' : 'application/json'
} 
function LoginForm({ authenticated, login, location }) {

  const [name, setName] = useState("")
  const [birth, setBirth] = useState("")
  const [tempKey, setTempKey] = useState("")
  
  useEffect( () => {
  
    if(authenticated == null){
      sessionStorage.setItem("authenticated",authenticated);
      console.log("LoginForm sessionStorage>>>",sessionStorage.getItem("authenticated"));
    }  
 });

  
  const handleClick = () => {
    try {
      const query = queryString.parse(location.state.from.search);

      let UserDB={
          name : name,
          birth : birth,
          tempKey : tempKey
      };
      
      axios.post(`${API_URL}/${query.userEmail}/${query.problemNo}`,{
        headers: API_HEADERS,
        body: JSON.stringify(UserDB)
      })
      .then(resp =>resp.data.data)
      .then(resp => login(resp))
      .catch(err => console.error(err));

    } catch (e) {
      alert("Failed to login")
      setTempKey("")
    }
  }
  

  const { from } = location.state || { from: { pathname: "/" } }
  if (authenticated) return <Redirect to={from} />

  return (
    <div className={styles.LoginForm}>
      <h1>Login</h1>
      <input
        value={name}
        onChange={({ target: { value } }) => setName(value)}
        type="text"
        placeholder="name"
      />
      <input
        value={birth}
        onChange={({ target: { value } }) => setBirth(value)}
        type="date"
        placeholder="birth"
      />
      <input
        value={tempKey}
        onChange={({ target: { value } }) => setTempKey(value)}
        type="text"
        placeholder="인증번호"
      />      
      <button onClick={handleClick}>Login</button>
    </div>
  )
}

export default LoginForm


// .then(resp => {
//   resp.name = name;
//   resp.birth = birth;
//   resp.tempKey = tempKey;
//   login(resp)
// })