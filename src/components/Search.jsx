import axios from 'axios'
import React, { useState } from 'react'
import Nav from './Nav'

const Search = () => {
const [data,setData] = useState(
    {
        "busname":""
    }
)
const [result,setresult] = useState([])
const deleteBus=(id)=>{
    let input={"_id":id}
    axios.post("http://localhost:8080/delete",input).then(
        (response)=>{
            console.log(response.data)
            if(response.data.status=="success"){
                alert("successfully deleted")
            }
            else{
                alert("error")
            }
        }
    ).catch()
}

const inputHandler = (event)=>{
    setData({...data,[event.target.name]:event.target.value})
}
const readValue=()=>{
    console.log(data)
    axios.post("http://localhost:8080/searchksrtc",data).then(
        (response)=>{
            console.log(response.dat)
            setresult(response.data)
        }
    ).catch(
        (error)=>{
            console.log(error)
        }
    ).finally()
}
  return (
    <div>
<Nav/>
<div className="container">
    <div className="row g-3">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <label htmlFor="" className="form-label">Bus name</label>
            <input type="text" className="form-control" name='busname' value={data.busname} onChange={inputHandler}/>
        </div>
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <button className="btn btn-secondary" onClick={readValue}>Search</button>
        </div>
        <div className="row">


            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <table class="table">
  <thead>
    <tr>
      <th scope="col">BUSNAME</th>
      <th scope="col">ROUTE</th>
      <th scope="col">BUS NO</th>
      <th scope="col">DRIVER NAME</th>
    </tr>
  </thead>
  <tbody>
    {result.map(
        (value,index)=>{
            return  <tr>
            <th scope="row">{value.busname}</th>
            <td>{value.route}</td>
            <td>{value.busno}</td>
            <td>{value.dname}</td>
            <td><button className="btn btn-danger" onClick={()=>{deleteBus(value._id)}}>Delete</button></td>
          </tr>
        }
    )}
   
    
  </tbody>
</table>
            </div>


        </div>
        
    </div>
</div>

    </div>
  )
}

export default Search