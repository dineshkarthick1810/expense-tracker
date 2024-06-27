import React from 'react'
import Header from '../components/Header'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.js"
import "../css/Home.css"
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'


const Home = () => {
  const Navigate=useNavigate()
 
  const users=useSelector((state)=>state.users.Usersinfo)
   console.log(users)

  return (
    <>
    <div className='container-fluid' >
   
    <div className='container' >
      
    
      <div className='row  mt-5'>
        <div className='col-lg-8 '>
          <img src="newimage.png" alt='expense tracker' className='img-fluid'/>
         
          
        </div>

        <div className='col-lg-4 ' style={{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}}>
          <p style={{fontWeight:"bold",fontSize:"20px"}} className='text-muted'>Expense Tracker allow for expense category creation and easy tracking, thereby illuminating spending patterns and potential areas for cost optimization.Explore more add Income and Expense to maintain the eerfect expense plan.</p>

          <div className='me-5'>
            <button className='btn btn-secondary me-4 px-4' onClick={()=>Navigate("/Income")}>Income</button>
            <button className='btn btn-secondary px-4' onClick={()=>Navigate("/Expense")}>Expense</button>
          </div>
            
          </div>
      </div>




    </div>
    </div>
    </>
  )
}

export default Home
