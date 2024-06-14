import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {
const [data,setData] = useState(
    {
        "email":"",
        "password":""
    }
)

const inputHandler=(event)=>{
    setData({...data,[event.target.name]:event.target.value})
}

const readValue=()=>{
    console.log(data)
    axios.post("http://localhost:8080/login",data).then(
        (response)=>{
            console.log(response.data)
            if (response.data.status=="success") {
                sessionStorage.setItem("token",response.data.token)
                sessionStorage.setItem("userid",response.data.userid)
                navigate("/busadd")
            } else {
                alert("Error in login")
            }
        }
    ).catch()
}

let navigate=useNavigate()

  return (
    <div>


<div className="container">
    <div className="row g-3">


 
    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
    
            <label htmlFor="" className="form-label"><center><b>KSRTC BUS INFO</b></center></label>
        
        </div>
        
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <label htmlFor="" className="form-label">Email Id</label>
            <input type="text" className="form-control" name='email' value={data.email} onChange={inputHandler} />
        </div>
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <label htmlFor="" className="form-label">Password</label>
            <input type="password" name="password" id="" className="form-control"  value={data.password} onChange={inputHandler}/>
        </div>
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <button className="btn btn-secondary" onClick={readValue}>Log in</button>
        </div>
        <div>
            <Link class="nav-link" to="/signup"><b>SignUp</b></Link>
        </div>
        
           
        
    </div>
</div>

    </div>
  )
}

export default Login