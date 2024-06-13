import axios from 'axios'
import React, { useState } from 'react'

const BusAdd = () => {
const [data,setData] = useState(
    {
        "busname":"",
        "route":"",
        "busno":"",
        "dname":""
    }
)

const inputHandler=(event)=>{
    setData({...data,[event.target.name]:event.target.value})
}

const readValue=()=>{
    console.log(data)
    axios.post("http://localhost:8080/add",data).then(
        (response)=>{
            console.log(response.data)
            if (response.data.status == "success") {
                alert("Successfully added")
            } else {
                alert("error")
            }
        }
    ).catch(
        (error)=>{
            console.log(error)
        })
    
}


  return (
    <div>

<div className="container">
    <div className="row g-3">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <label htmlFor="" className="form-label">Busname</label>
            <input type="text" className="form-control"  name='busname' value={data.busname} onChange={inputHandler}/>
        </div>
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <label htmlFor="" className="form-label">Route</label>
            <input type="text" className="form-control" name='route' value={data.route}  onChange={inputHandler} />
        </div>
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <label htmlFor="" className="form-label">Bus no</label>
            <input type="text" className="form-control" name='busno' value={data.busno} onChange={inputHandler} />
        </div>
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <label htmlFor="" className="form-label">Driver name</label>
            <input type="text" className="form-control" name='dname' value={data.dname} onChange={inputHandler}/>
        </div>
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
        
            <button className="btn btn-secondary" onClick={readValue}>Add Bus</button>
        </div>
    </div>
</div>


    </div>
  )
}

export default BusAdd