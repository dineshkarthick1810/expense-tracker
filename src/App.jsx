import React from 'react'
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom"
import Firstpage from './pages/Firstpage'
import Home from './pages/Home'
import Income from './pages/Income'
import Expense from './pages/Expense'
import Login from './components/Login'
import Register from './components/Register'
import Header from './components/Header'
import Protected from './components/Protected'
import Dashboard from './pages/Dashboard'




const App = () => {
 
 
  

  return (
    <>




      <BrowserRouter>
      <Header/>
     
      
      
        <Routes>
          
          <Route path='/' element={<Firstpage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Register />} />
        
       


<Route element={<Protected/>}>


          
            <Route path='/Home' element={<Home/>}/>
            
            
          <Route path='/Income' element={<Income />} />
          <Route path='/Expense' element={<Expense />} />
          <Route path='/Dashboard' element={<Dashboard/>}/>

         
          </Route>


          

        




        </Routes>
      </BrowserRouter>

    </>

  )
}

export default App
