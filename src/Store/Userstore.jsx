import { configureStore } from '@reduxjs/toolkit';
import  usersSlice  from '../Slice/Registerslice'; // Correct import path
import Income  from '../Slice/Income';
import Expense from '../Slice/Expense';
import Recenthistory from '../Slice/Recenthistory';

const store = configureStore({
    reducer: {
        users: usersSlice ,
        income:Income,
        expense:Expense,
        recenthistory:Recenthistory
    }
});

export default store;
