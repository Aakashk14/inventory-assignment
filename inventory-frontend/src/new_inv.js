import Header from './header'
import { useState,useEffect } from 'react'
import axios from 'axios'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import './inc_.css'
import {useNavigate} from 'react-router-dom'





function New_(){
    const navigate =  new useNavigate()
const [loading,setloading]=useState(false)
const [success,setsuccess] = useState(false)
const [data,setdata]=useState({
    inv_id:"",
    Name1:"",
    Name2:"",
    Price:"",
    Vendor:""

})

useEffect(()=>{
    if(success){
        navigate('/')
    }
},[success])



const submit=(e)=>{
    e.preventDefault()
    setloading(true)
axios.post("http://localhost:5000/api/inventory/new",{data:data}).then((data)=>{
if(data.data!="error"){
    
  setsuccess(true)
}else{
    setloading(false)
    alert("Something went wrong")
}

}).catch((e)=>{
    console.log(e)
})
    
setloading(true)
}


    return(
        <div className='inv_page'>
            <Header />

<div className="box">
<Form onSubmit={submit}>
  <Form.Group className="mb-3" controlId="formBasicText">
    <Form.Label>Inventory Id</Form.Label>
    <Form.Control type="text" placeholder="Inventory Id"  onChange={e=>{setdata({...data,inv_id:e.target.value})}} required/>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicText">
    <Form.Label>Name1</Form.Label>
    <Form.Control type="text" placeholder="Name1"  onChange={e=>{setdata({...data,Name1:e.target.value})}} required />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicText">
    <Form.Label>Name2</Form.Label>
    <Form.Control type="text" placeholder="Name2"  onChange={e=>{setdata({...data,Name2:e.target.value})}} required />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicNumber">
    <Form.Label>Price</Form.Label>
    <Form.Control type="Number" placeholder="100"  onChange={e=>{setdata({...data,Price:e.target.value})}}  required />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicText">
    <Form.Label>Vendor</Form.Label>
    <Form.Control type="text" placeholder="Vendor"  onChange={e=>{setdata({...data,Vendor:e.target.value})}} required />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicDate">
    <Form.Label>Date</Form.Label>
    <Form.Control type="Date" placeholder="Vendor"  onChange={e=>{setdata({...data,Date:e.target.value})}} required />
  </Form.Group>

  {loading?<p id="note">loading</p>:<Button variant="dark" type="submit">
  
    Submit
  </Button>
}
</Form>
</div>
</div>
    )

}

export default New_