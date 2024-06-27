import { createSlice } from "@reduxjs/toolkit"
const expense={
    userExpense:[]
}

 export const userexpense=createSlice({
    name:"expense",
    initialState:expense,
    reducers:{
        setexpense:(state,action)=>{
            state.userExpense=[...state.userExpense,action.payload]

        },
        deleteExpense:(state,action)=>{
            state.userExpense=state.userExpense.filter((val,index)=>{
                return index!==action.payload
            })

        }

    }
})

export const {setexpense,deleteExpense}=userexpense.actions

export default userexpense.reducer