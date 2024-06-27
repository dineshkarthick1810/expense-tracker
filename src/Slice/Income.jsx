import { createSlice } from "@reduxjs/toolkit"
const income={
    userincome:[]
}

 export const incomeSlice=createSlice({
    name:"income",
    initialState:income,
    reducers:{
        setincome:(state,action)=>{
            state.userincome=[...state.userincome,action.payload]

        },
        deleteincome:(state,action)=>{
            state.userincome=state.userincome.filter((val,index)=>index!==action.payload)
            
        }
    }

})

export const {setincome,deleteincome}=incomeSlice.actions
export default incomeSlice.reducer