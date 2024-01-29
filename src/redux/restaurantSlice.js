import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
//for calling API IN REDUX/SLICE WE USE THUNK
//THUNK IS AMETHOD PROVIDED BY REDUX TO MAKE API CALLS 
//API CALLS ARE ASYNCH FUNCT SO WE USE CONCEPT OF PROMISE
// THUNK IS FOR MAKING API CALLS,USES createAsynchThunk() method with two arguments action type and function


//function to call api
export const fetchRestaurant = createAsyncThunk('restaurantList/fetchRestaurant',()=>{
   const result= axios.get('/restaurant.json').then(response=>response.data)
   return result
})


const restaurantSlice = createSlice({
    name:'restaurantList',
    initialState:{
        loading:false, //pending
        allRestaurant:[],//resolve
        err:"" //reject
    },
    extraReducers:(builder)=>{
        builder.addCase(fetchRestaurant.pending,(state)=>{
            state.loading = true
        })
        builder.addCase(fetchRestaurant.fulfilled,(state,action)=>{
            state.loading = false
            state.allRestaurant = action.payload
            state.err = ""
        })
        builder.addCase(fetchRestaurant.rejected,(state,action)=>{
            state.loading =false
            state.allRestaurant =[]
            state.error = action.error.message;
        })
    
    },
    reducers: {
        search: (state, action) => {
            state.allRestaurant.restaurants = state.searchRestaurant.restaurants.filter(item => item.name.toLowerCase().includes(action.payload))
        }
    }
})
export default restaurantSlice.reducer
export const {search} = restaurantSlice.actions;