import React, { useContext, useState } from 'react'
import './LoginPopup.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../context/StoreContext'
import axios from 'axios'

const LoginPopup = ({setShowLogin}) => {

    const {url,setToken} = useContext(StoreContext)
    const [currState,setCurrState]= useState("Login")
    const [data,setData] = useState({
        name:"",
        email:"",
        password:""
    })
    const onChangeHandler = (event)=>{
        const name= event.target.name;
        const value= event.target.value;
        setData(data=>({...data,[name]:value}))

    }

   const onLogin = async (event)=>{
event.preventDefault()
let newURL = url;
if(currState==="Login"){
    newURL+="/api/user/login"
}else{
    newURL+="/api/user/register"
}
// this api work on both 
const response = await axios.post(newURL,data);

if(response.data.success){
    setToken(response.data.token);
    localStorage.setItem("token",response.data.token);
    setShowLogin(false)
}
else{
    alert(response.data.message)
}

    }
  

  return (
    <div className='login-popup'>
        <form onSubmit={onLogin} action="" className="login-popup-container">
            <div className="login-popup-title">
                <h2>{currState}</h2>
                <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="" />
            </div>
            <div className="login-popup-inputs">
                {currState==="Login"?<></>: <input onChange={onChangeHandler} value={data.name} name='name' type="text" placeholder='User Name' required />}
               
                <input onChange={onChangeHandler} value={data.email} name='email' type="email"  placeholder='Email' required  />
                <input onChange={onChangeHandler} value={data.password} name='password' type="password"  placeholder='Password' required/>
            </div>
            <button type='submit'>{currState==="Sign Up"?"Create Account":"Login"}</button>
            <div className="login-popup-condition">
                {/* <input type="checkbox" required />
                <p>By continuing, I agree to the terms of use & privacy policy</p> */}
            </div>
            {currState==="Login"?<p>Create a new Account?<span onClick={()=>setCurrState("Sign Up")}>Click here</span></p>:<p>Already have an account?<span onClick={()=>setCurrState("Login")}>Login here</span></p>}
            
            
        </form>

    </div>
  )
}

export default LoginPopup