import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.js"
import { useSelector } from 'react-redux'
import "../css/Dashboard.css"
import Barchart from '../components/Barchart'


const Dashboard = () => {

const RecentHistory=useSelector((state)=>state.recenthistory.history)

  const incomeItems=useSelector((state)=>state.income.userincome)
  const ExpenseItems=useSelector((state)=>state.expense.userExpense)

  const ExpenseAmount=ExpenseItems.reduce((prev,cur)=>{
    return prev+parseInt(cur.Amount)
  },0)

const IncomeAmount=incomeItems.reduce((prev,curr)=>{
  return prev+parseInt(curr.Amount)
},0)


const TotalBalance=ExpenseAmount?  IncomeAmount-ExpenseAmount :IncomeAmount
const minIncomevalues=[]
const minIncome=incomeItems.map((val)=>{
   minIncomevalues.push(val.Amount)
})

const minimumIncome=incomeItems.length>0?   Math.min(...minIncomevalues) :"0"
const maxIncome=incomeItems.length>0?Math.max(...minIncomevalues):"0"


const expensevalMAmount=[]
const minExpense=ExpenseItems.map((val)=>{
  
    expensevalMAmount.push(val.Amount)
  
  
  
})


const expenseMinimum=expensevalMAmount.length>0? Math.min(...expensevalMAmount):"0"
const expenseMaximum=expensevalMAmount.length>0? Math.max(...expensevalMAmount) :"0"
console.log(expenseMinimum)
  return (
    <div className='container-fluid'>

   
    <div className='row'>
<div className='col-md-7 foraligning-firstcolomn'>
  <div className='forchart py-4 ' style={{width:"100%",display:"flex",justifyContent:"center"}}>
<Barchart/>
  </div>
  <div className='forincome-display mt-5'>
    <div className='fordisplayIncome'>
      <p>{`Total Income $`} <span className='text-success'>{IncomeAmount}</span></p>

    </div>
    <div className='fordisplayExpense'>
      <p>{`Total Expense $`}<span className='text-danger'>{ExpenseAmount}</span></p>

    </div>
    

  </div>
  <div className=' mt-5 forsmall-device' style={{display:"flex",justifyContent:"center"}}>  
  <div className='fordisplay-balance '>
<p className='text-secondary' style={{fontWeight:"bold",fontSize:"23px"}}>Total Balance $ <span className='text-success'>{TotalBalance}</span> </p>

    </div>
  </div>
  

</div> 

<div className='col-md-5 foralign-recent'>
  
  <div style={{width:"100%"}}>
<p className="forHistory mt-2 ms-2">Recent History</p>

<div style={{width:"100%"}}>
  {RecentHistory.map((val,index)=>{
    return <div className='shadow mt-5 p-3' style={{display:"flex",justifyContent:"space-between",width:"100%",borderRadius:"10px"}}>

<p style={{fontWeight:"bold"}}  className={val.isIncome?"text-success" :"text-danger"}>{val.Title}</p>
<p style={{fontWeight:'bold'}} className={val.isIncome?"text-success" :"text-danger"}>${val.Amount}</p>
    </div>
  })}
  

</div>
<p className='text-center mt-5' style={{fontWeight:"bold",color:"grey",fontSize:'20px'}}>Salary</p>
<div style={{width:"100%",display:"flex",justifyContent:"space-between"}} className='shadow p-3 mt-3'>
  <p className='text-danger' style={{fontWeight:"bold"}}>Min- ${minimumIncome}</p>
  <p className='text-success' style={{fontWeight:"bold"}}>Max- ${maxIncome}</p>
  
</div>
<p className='text-center mt-5' style={{fontWeight:"bold",color:"grey",fontSize:'20px'}}>Expense</p>
<div style={{width:"100%",display:"flex",justifyContent:"space-between"}} className='shadow p-3 mt-2'>
  <p className='text-danger' style={{fontWeight:"bold"}}>Min- ${expenseMinimum}</p>
  <p className='text-success' style={{fontWeight:"bold"}}>Max- ${expenseMaximum}</p>
  
</div>
    

  </div>

</div>
        
      
    </div>

    </div>
  )
}

export default Dashboard
