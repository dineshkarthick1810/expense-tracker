import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'


const Protected = () => {

    const dataexist=useSelector((state)=>state.users.Usersinfo)
    
   
    

 
      
    
   
    
    return (
        <>
       
        {dataexist.length>=1?<Outlet/>:<Navigate to="/" />}
        </>
     )
}

export default Protected
