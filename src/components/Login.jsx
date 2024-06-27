import React, { useEffect, useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.js"
import "../css/Register.css"
import { Link, useNavigate } from 'react-router-dom'
import "../css/Login.css"
import { useSelector } from 'react-redux'
import {ToastContainer,toast} from "react-toastify"

const Login = () => {
  const navigate=useNavigate()
const Existusers=useSelector((state)=>state.users.Usersinfo)
const [users,setUsers]=useState({
  usersname:"",
  password:""
})


const handlechange=(e)=>{
  const {name,value}=e.target
  setUsers({
   ...users,[name]:value
  })

}
console.log(users)
  useEffect(()=>{
    const forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }
      else{
        event.preventDefault()
      }

      form.classList.add('was-validated')
    }, false)
  })

  },[])

 
  const handleLogin = (e) => {
   
    e.preventDefault();
   const existusers=Existusers.forEach((val)=>{
    if(val.name.toLowerCase()==users.usersname.toLowerCase() ){
      navigate("/Home")
    }
    else{
      toast.error("invalid users")
    }
   })

    
  };



  return (
    <div>
      <div className='forlogincontainer'>
        <form className=' forloginform needs-validation' onSubmit={(e)=>handleLogin(e)} noValidate >
          <p className="forloginlogo mt-4 ">Log In</p>
          <div>
            <input type='text' className='form-control forlogininput ' placeholder='Username' name='usersname' onChange={(e)=>handlechange(e)} required />
            <div className="valid-feedback">
              Looks good!
            </div>
            <div className="invalid-feedback">
              Please choose a valid username.
            </div>
          </div>

          <div>
            <input type='password' className='form-control forlogininput' placeholder='Password' name='password'  onChange={(e)=>handlechange(e)} required />
            <div className="valid-feedback">
              Looks good!
            </div>
            <div className="invalid-feedback">
              Please choose a  valid password
            </div>
          </div>
          <div className='mt-3'>
            <button type='sumbit' className='btn btn-success px-3'>Login</button>
            <ToastContainer/>
          </div>
          <div>
            <p className='text-muted'>Create Account? <Link to="/signup" className='text-primary'>Register</Link></p>
          </div>

        </form>

      </div>
    </div>
  )
}

export default Login
