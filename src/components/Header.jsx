import React, { useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.js"
import "../css/Header.css"
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { deleteUser } from '../Slice/Registerslice'

const Header = () => {
  const dispatch=useDispatch()
 const dataexist=useSelector((state)=>state.users.Usersinfo)
 console.log(dataexist)
  const navigate=useNavigate()


  const handlelogout=()=>{
    dispatch(deleteUser())
    navigate("/signup")
  }
  

    return (
        <>
            <div>
            <nav className="navbar navbar-expand-lg bg-white shadow forlg-height" style={{position:"relative"}}>
  <div className="container-fluid ">
    <Link className="navbar-brand text-secondary Logo" to="/">Expense <span className='text-success'> Tracker</span>  </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    

  <div className='collapse navbar-collapse fornavigation-margin me-2' id='navbarSupportedContent'>
    <ul className='list-unstyled list-inline'>
      {dataexist.length>=1?<div><li  className='list-inline-item navigation  '><Link to='/Home' className='text-decoration-none text-secondary'>Home</Link></li>
        <li className='list-inline-item navigation ms-2 '><Link to="/Dashboard" className='text-decoration-none text-secondary ms-2'>Dashboard</Link></li> 
        <li className='list-inline-item navigation ms-2 '><Link to="/Income" className='text-decoration-none text-secondary'>Income</Link></li> 
        <li className='list-inline-item navigation ms-2  '><Link to="/Expense" className='text-decoration-none text-secondary'>Expense</Link></li> 
        <li className='list-inline-item navigation ms-2  ' onClick={()=>handlelogout()}><Link to="/signup" className='text-decoration-none text-secondary' >Logout</Link></li> 
        
           </div>:<div>  <li  className='list-inline-item navigation me-4' onClick={()=>navigate("/signup")}><Link href='' className='text-decoration-none text-secondary' >Register</Link></li>
        <li className='list-inline-item navigation' onClick={()=>navigate("/login")}><Link href='' className='text-decoration-none text-secondary' >Sign in</Link></li></div>}
      


    </ul>
  </div>
  </div>
</nav>

            </div>
        </>


    )
}

export default Header
