import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    Usersinfo: []
};

export const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.Usersinfo=[...state.Usersinfo,action.payload]
        },

        deleteUser:(state,action)=>{
            state.Usersinfo.pop()

        }
    }
});

export const { setUser,deleteUser } = usersSlice.actions;
export default usersSlice.reducer;
