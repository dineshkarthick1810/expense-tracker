import React, { useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.js"
import "../css/Register.css"
import { Link ,Navigate, useNavigate} from 'react-router-dom'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setUser } from '../Slice/Registerslice'

const Register = () => {
  
const dispatch=useDispatch()
const navigate=useNavigate()

  const [userdata,setuserdata]=useState({
    name:"",
    mailid:"",
    password:""
  })


  const handleChange=(e)=>{
    const {name,value}=e.target
    setuserdata({
      ...userdata,[name]:value
    })
  }


  useEffect(()=>{
    const forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }
      

      form.classList.add('was-validated')
    }, false)
  })

  },[])

//for handle register after clicking the register button

const handlesubmit=(e)=>{
  console.log(userdata)
  e.preventDefault()
  dispatch(setUser(userdata))
  navigate("/Home")
  

 
}

 
  



  return (
    <div className='forcontainer'>
        <form className='forform needs-validation ' onSubmit={(e)=>handlesubmit(e)} noValidate>
          <p className='forregister mt-5'>Register</p>
          <div>
            <input type='text' className='form-control forinput' name='name' onChange={(e)=>handleChange(e)} placeholder='Username' required/>
            <div className="valid-feedback">
              Looks good!
            </div>
            <div className="invalid-feedback">
              Please choose a valid username.
            </div>
          </div>
          <div>
            <input type='email' className='form-control forinput' onChange={(e)=>handleChange(e)} name='mailid' placeholder='Enter Mail'  required/>
            <div className="valid-feedback">
              Looks good!
            </div>
            <div className="invalid-feedback">
              Please choose a valid mail.
            </div>
          </div>
          <div>
            <input type='password' onChange={(e)=>handleChange(e)} className='form-control forinput' name='password' placeholder='Password'  required/>
            <div className="valid-feedback">
              Looks good!
            </div>
            <div className="invalid-feedback">
              Suggest strong password
            </div>
          </div>
<div className='mt-3'>
  <button type='submit'  className='btn btn-success'>Register</button>
</div>
<div>
  <p className='text-muted'>Already have an Account? <Link to="/login" replace={true} className='text-primary'>Login</Link></p>
</div>

        </form>
      
    </div>
  )
}

export default Register
