import React,{useState} from 'react'
import { Link,useNavigate } from 'react-router-dom';


function Login() {

  let navigate=useNavigate();  //helps to navigate like takes to home page after submit buton clicked
  const [credentials, setcredentials] = useState({email:'',password:''})    


  const handleSubmit=async(e)=>{
   console.log(JSON.stringify({email:credentials.email,password:credentials.password})
   )
       e.preventDefault();
       const response=await fetch("https://fooddeliverybackend-5-1jty.onrender.com/api/loginuser",{
           method:'POST',
           headers:{'Content-Type':'application/json'
  },
  body:JSON.stringify({email:credentials.email,password:credentials.password})

       });

       const json=await response.json()
       console.log(json)

       if (!json.success) {
           alert("Enter Valid Credentials")
       }
       if (json.success) {
        localStorage.setItem("userEmail",credentials.email)
        localStorage.setItem("authToken",json.authToken)   //token gets stored until chache is cleared
        console.log(localStorage.getItem("authToken"))
        navigate('/')     //homepage link
    }
   }


   const onChange=async(event)=>{
       setcredentials({...credentials,[event.target.name]:event.target.value})
   }


  return (
    <div>
 <div className='container'>
        
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name='email' value={credentials.email} onChange={onChange}/>
            <div id="emailHelp" className="form-text" >We'll never share your email with anyone else.</div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
            <input type="password" className="form-control" id="exampleInputPassword1" name='password' value={credentials.password} onChange={onChange}/>
          </div>
          
          <button type="submit" className="m-3 btn btn-primary">Submit</button>
          <Link to='/createuser' className="m-3 btn btn-danger">New User</Link>
          </form>

          <p>Username: email@gmail.com</p>
          <p>Password:123456</p>
            </div>

         

    </div>
  )
}

export default Login