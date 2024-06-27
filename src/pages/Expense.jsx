import React  from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.js"
import AddIcon from '@mui/icons-material/Add';
import { useDispatch, useSelector } from 'react-redux';
import { deleteincome, setincome } from '../Slice/Income';
import DateRangeIcon from '@mui/icons-material/DateRange';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import DeleteIcon from '@mui/icons-material/Delete';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { deleteExpense, setexpense } from '../Slice/Expense'
import "../css/Expense.css"
import { useState ,useEffect} from "react"
import { setRecent } from '../Slice/Recenthistory';


const Expense = () => {

  const dispatch=useDispatch()

  const ExpenseItems=useSelector((state)=>state.expense.userExpense)

  const ExpenseAmount=ExpenseItems.reduce((prev,cur)=>{
    return prev+parseInt(cur.Amount)
  },0)

  const [ExpenseValues,setExpenseValues]=useState({
    Title:"",
    Amount:"",
    Date:"",
    Message:"",
    isExpense:true
  })

  const hanldeChange=(e)=>{
    const {name,value}=e.target
    setExpenseValues({...ExpenseValues,[name]:value})

  }
  
  const handleexpense=(e)=>{
    e.preventDefault()
    dispatch(setexpense(ExpenseValues))
    dispatch(setRecent(ExpenseValues))
    toast.success("sucessfully added")
   const input=document.getElementsByClassName("form-control");
   input.value=""

    

  }
  const handledelete=(index)=>{
    dispatch(deleteExpense(index))
    toast.error("deleted succcesfully")
    

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
  return (
    <div>
      

    <div className='container-fluid mt-4'>

  <div className=' forincome-display'>
<p className='text-secondary'>Total Expense  <span className='text-success'>{`$ ${ExpenseAmount}`}</span></p>

</div>

    

      <div  className='row'>
        <div className='col-md-5 forcenter-form'>

          <form  className='needs-validation' noValidate onSubmit={(e)=>handleexpense(e)}>
            <div>
            <input type='text' placeholder='Expense title' className='form-control ' onChange={(e)=>hanldeChange(e)} name='Title' required/>
            </div>
            <div >
              <input type='number' placeholder='Enpense Amount' className='form-control' onChange={(e)=>hanldeChange(e)} name="Amount" required/>
            </div>
            <div>
              <input type='date' placeholder='Enter date' className='form-control' onChange={(e)=>hanldeChange(e)} name='Date' required/>
            </div>

            <div>
              <textarea placeholder='enter message' className='form-control' onChange={(e)=>hanldeChange(e)} rows={4} cols={30} name='Message' required>


              </textarea>
            </div>

            <div className='forbtn-income mt-3'>
              <button type='submit' className='btn btn-secondary'> <span className='me-1'><AddIcon/></span>Add Expense</button>
              <ToastContainer/>
            </div>
            
          </form>

        </div>

        <div className='col-md-7'>
          {ExpenseItems.map((val,index)=>{
            return <div className='forincome-aligments '>
            <div>
              <p style={{fontWeight:"bold"}} className=' badge bg-danger px-3 py-2 ms-2 mt-2'> {val.Title}</p>
              <div style={{display:"flex"}} className='mt-3'>

              <p style={{fontWeight:"bold"}} className='text-success ms-2'>{`$ ${val.Amount}`}</p>
              <p style={{fontWeight:"bold"}} className='ms-4 text-secondary'><DateRangeIcon/>{` ${val.Date}`}</p>
              <p style={{fontWeight:"bold"}} className='ms-4 text-secondary'> <ChatBubbleIcon/>{` ${val.Message}`}</p>

                </div>

            

            </div>

            <div className='mt-5 me-4'>
              <p className='text-secondary ' style={{color:"grey",fontWeight:"bold",fontSize:"20px"}}onClick={()=>handledelete(index)}><DeleteIcon/></p>

            </div>
          </div>
          })}
          


        </div>


      </div>


    </div>


      
    
    
  </div>
  )
}

export default Expense
