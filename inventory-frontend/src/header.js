import './header.css'
import { Button } from 'react-bootstrap'
import  { Link} from 'react-router-dom'
function Header(){

    return(
        <div className="header">
        <Link id="link" className="btn btn-sm btn-secondary" variant="dark" to="/">Inventories </Link>
        <Link id="link" className="btn btn-sm btn-secondary" variant="dark" to="/inventory/new">Add New </Link>


           
    </div>
    
    )
}


export default Header