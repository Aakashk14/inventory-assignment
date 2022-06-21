import { useEffect,useState } from 'react'
import axios from 'axios'
import { Button } from 'react-bootstrap'
import Header from './header'
import './home.css'
function Home(){

    const [loading,setloading] =useState(true)
    const [findbutton,setfind]=useState(true)
    
    const [data,setdata]=useState("")
   const [temp,settemp]=useState("");
    const [vendor,setvendor]=useState("");
    const[date,setdate]=useState("")
    
    
const find=()=>{

setfind(false)
    let tm=[];
setloading(false)

for(let i=0; i< data.length;i++){
let data_tmp = new Date(data[i].Date)
   let month = data_tmp.getMonth()<10?"0"+parseInt(data_tmp.getMonth()+1):data_tmp.getMonth()
let dt= data_tmp.getFullYear()+"-"+month+"-"+data_tmp.getDate()
if((vendor=="" || data[i].vendor_Name==vendor) && (dt==date || date=="")){
tm.push(data[i])
}




}

if(tm.length==0){
alert("No Matching Data")
}else{
settemp(tm)
}
setloading(false)
setfind(true)
}
const clear=()=>{
    settemp(data)
    setdate("")
    setvendor("")
}

useEffect(()=>{
    axios.get("http://localhost:5000/api/inventory/fetch").then((result)=>{
        if(result.data!="empty"){
            setdata(result.data)
            settemp(result.data)
            setloading(false)


        }else{
            setdata(0)
            settemp(0)
            setloading(false)
        }
    })
},[])

if(loading){
    return(
        <div>loading</div>
        )
    }else if( temp==0){
        return(
            <div className="home_p">
            <Header />
            <p style={{position:"absolute",left:"30%",top:"30%"}}>No Inventory !! No Data to Display</p>
            </div>
        )
    }else{

    return(
        <div className="home_p">
            <Header />
        <div className="main_container">
            <div className="functions">
    Filter: <input type="text" id="vendor" placeholder="Vendor" value={vendor} onChange={e=>{setvendor(e.target.value)}} />
    <input type="Date" id="date" onChange={e=>{setdate(e.target.value)}} />
    <div className="find_fn">
  {findbutton?<Button onClick={find}>Find</Button>:<p>Searching....</p>}
  <Button id="clear" className="btn btn-sm btn-secondary" onClick={clear}>Clear</Button>
  </div>

</div>


<table>
  <thead>
    <tr>
      <th>Inventory Code</th>
      <th>Date</th>
      <th>Name 1</th>
      <th>Name 2</th>
      <th>Vendor</th>
      <th>Price</th>
    </tr>
  </thead>
  <tbody>
    {
     temp.map((x,index)=>{
        let tm = new Date(x.Date)
        return(
            <tr key={index}>
                <td>{x.item_code}</td>
                <td>{tm.getFullYear()+"-"+(tm.getMonth()+1)+"-"+tm.getDate()}</td>
                <td>{x.Name1}</td>
                <td>{x.Name2}</td>
                <td>{x.vendor_Name}</td>
                <td>{x.Price}</td>
            </tr>
        )
    })}


    
  </tbody>


</table>
</div>
</div>
        
    )
       
    }
}

export default Home