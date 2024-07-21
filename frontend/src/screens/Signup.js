import React,{useState} from 'react'
import { Link } from 'react-router-dom';

// localurl: http://localhost:3000/

function Signup() {

    const [credentials, setcredentials] = useState({name:'',email:'',password:'',geolocation:''})    


   const handleSubmit=async(e)=>{
    console.log(JSON.stringify({name:credentials.name,email:credentials.email,password:credentials.password,location:credentials.geolocation})
    )
        e.preventDefault();
        const response=await fetch("https://fooddeliverybackend-5-1jty.onrender.com/api/createuser",{
            method:'POST',
            headers:{'Content-Type':'application/json'
                                                         },
            body:JSON.stringify({name:credentials.name,email:credentials.email,password:credentials.password,location:credentials.geolocation})

        });

        const json=await response.json()
        console.log(json)

        if (!json.success) {
            alert("Enter Valid Credentials")
        }
    }

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const response = await fetch("http://localhost:3000/api/createuser", {
  //       method: 'POST',
  //       headers: { 'Content-Type': 'application/json' },
  //       body: JSON.stringify({
  //         name: credentials.name,
  //         email: credentials.email,
  //         password: credentials.password,
  //         location: credentials.geolocation
  //       })
  //     });
  
  //     if (!response.ok) {
  //       throw new Error('Failed to create user');
  //     }
  
  //     const json = await response.json();
  //     console.log(json);
  
  //     if (!json.success) {
  //       alert("Enter Valid Credentials");
  //     }
  //   } catch (error) {
  //     console.error('Error creating user:', error);
  //     // Handle error here, e.g., show a user-friendly error message
  //     alert("Failed to create user. Please try again later.");
  //   }
  // }
  

    const onChange=async(event)=>{
        setcredentials({...credentials,[event.target.name]:event.target.value})
    }

  return (
    <>
    <div className='container'>
        
<form onSubmit={handleSubmit}>
<div className="mb-3">
    <label htmlFor="name" className="form-label">Name</label>
    <input type="text" className="form-control" name='name' value={credentials.name} onChange={onChange}/>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name='email' value={credentials.email} onChange={onChange}/>
    <div id="emailHelp" className="form-text" >We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" name='password' value={credentials.password} onChange={onChange}/>
  </div>
  <div className="mb-3">
    <label htmlFor="name" className="form-label">Address</label>
    <input type="text" className="form-control" name='geolocation' value={credentials.geolocation} onChange={onChange}/>
  </div>
  <button type="submit" className="m-3 btn btn-primary">Submit</button>
  <Link to='/login' className="m-3 btn btn-danger">Already a User</Link>
  </form>
    </div>
    </>
  )
}

export default Signup;