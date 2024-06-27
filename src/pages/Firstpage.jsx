import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.js"
import "../css/Firstpage.css"
import { v4 as uuidv4 } from 'uuid';
import Header from '../components/Header';



const Firstpage = () => {

   
    const navigate=useNavigate()
   


    return (
        <>
        
             <div className='container' style={{ height: "100vh" }}>
                <div className='row'>
                    <div className='col-lg-6 ' >
                        <div className='forflex '>
                            <div >
                                <h1 className='text-black forfont'>Take <span className='text-success'>Control</span>  </h1>
                                <h1 className="text-black forfont" >of Your finances</h1>

                                <p className='text-muted ' style={{ fontWeight: "bold" }}>Track your monthly inflow and outflow of cash to be able to take effectively Financial Decision</p>

                                <div className='mt-3 d-flex'>
                                 <div onClick={()=>navigate("/signup")}><Link to='' className='btn forbtn btn-success '  >Register</Link></div>   
                                   <div onClick={()=>navigate("/login")}><Link to='' className='btn forbtn btn-success ms-3'   >Sign in</Link></div> 
                                </div>
                            </div>



                        </div>


                    </div>
                    <div className="col-lg-6 d-flex justify-content-center align-item-center  ">
                        <img src='https://www.zazz.io/blog/wp-content/uploads/2023/03/image-42.png' className='img-fluid mt-5' style={{ width: "100%", height: "100%", backgroundSize: "cover" }} />

                    </div>
                </div>
            </div>
            






        </>

    )
}

export default Firstpage
