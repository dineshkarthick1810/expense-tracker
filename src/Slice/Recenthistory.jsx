
import { createSlice } from "@reduxjs/toolkit"
const recenthistory={
    history:[]

}

export const recentSlice=createSlice({
    name:"history",
    initialState:recenthistory,
    reducers:{
        setRecent:(state,action)=>{
            state.history.unshift(action.payload)

        }
    }
})

export const{setRecent}=recentSlice.actions
export default recentSlice.reducer
