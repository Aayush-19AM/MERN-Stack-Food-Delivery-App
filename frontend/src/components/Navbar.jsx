import React,{useState} from 'react'
import { Link,useNavigate } from 'react-router-dom'
import Badge from 'react-bootstrap/Badge'
import Modal from '../Modal';
import Cart from '../screens/Cart';
import { useCart } from './ContextReducer';

function Navbar() {

const navigate=useNavigate();   //helps to navigate on application

const handleLogout=()=>{
  localStorage.removeItem("authToken")  //removes the generated token so session expires
  navigate("/login")
}


const [CartView, setCartView] = useState(false)
let data=useCart();

  return (
    <div>
    <nav className="navbar navbar-expand-lg bg-success " >
      <div className="container-fluid">
        <Link className="navbar-brand fs-1 fst-italic" to="/" style={{"color":"white"}}>Foodie</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active fs-5 text-white" aria-current="page" to="/" >Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active fs-5 text-white" aria-current="page" to="/AboutUs" >About Us</Link>
            </li>
            {/* <li className="nav-item">
              <Link className="nav-link" to="/AboutUs">AboutUs</Link>
            </li>  */}

            {(localStorage.getItem("authToken"))
             ?
             <li className="nav-item">
              <Link className="nav-link active fs-5 text-white" aria-current="page" to="/myOrder" >My Orders</Link>
            </li>
             :" "}
                
          </ul>
          
          {(!localStorage.getItem("authToken"))
          ?

            <div className="d-flex">
              <Link className="btn bg-white mx-1" aria-current="page" to="/Login">Login</Link>
              <Link className="btn bg-white mx-1" to="/createuser">Signup</Link>
            </div>

            : 
            <div>
                          <div className="btn bg-white mx-2" onClick={()=>{setCartView(true)}}>My Cart{" "}
                          <Badge pill bg="danger">{data.length}</Badge>
                          </div>
                          {CartView? <Modal onClose={()=>{setCartView(false)}}><Cart/></Modal>:null}
                          <div className="btn bg-white text-danger mx-2" onClick={handleLogout}>Logout</div>

            </div>

}
        </div>
      </div>
    </nav>
    </div>
  )
}

export default Navbar