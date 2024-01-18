import { createAsyncThunk, createSlice, isRejected } from "@reduxjs/toolkit";
import axios from 'axios';
import { API_URL ,JOB_RECRUITER, JOB_SEEKER} from "../../utils/constants.js";

  
const initialState = {
    user:[],
    isvalidUser:localStorage.getItem('isValidOrNot')!==null?JSON.parse(localStorage.getItem('isValidOrNot')):"",
    isLoading: false, 
    hasRecruiter:localStorage.getItem('isRecruiterOrNot')!==null?JSON.parse(localStorage.getItem('isRecruiterOrNot')):"",
    doneRegister:false,
    userExist:"",
    emailId:localStorage.getItem('emailId')!==null?JSON.parse(localStorage.getItem('emailId')):"",
    firstName:"",
    LastName:"",
    companyName:"",
    
    
}



export const users = createAsyncThunk("users/create",async(params, thunkAPI)=>{

    return axios.post(`${API_URL}user/create` ,params)
   
    
});

export const validateUser=createAsyncThunk("user/validUser", async(params,thunkAPI)=>{
    try{
    const response=await axios.post(`${API_URL}user/validUser`,params);
    
    return response.data;
    }
    catch (error){
        return thunkAPI.rejectWithValue(error.response.data);
    }
})
export const profile=createAsyncThunk("user/update", async(params,thunkAPI)=>{
    try{
    const response=await axios.put(`${API_URL}user/update`,params);
    
    return response.data;
    }
    catch (error){
        return thunkAPI.rejectWithValue(error.response.data);
    }
})




export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        reset: ()=> initialState
      
    },
    extraReducers: (builder) => {   
        builder
        .addCase(users.pending,(state)=>{
            state.isLoading = true;
        })
        .addCase(users.rejected, (state)=> {
            state.isLoading = false;
        })
        .addCase(users.fulfilled, (state, {payload})=>{
            const { emailId } = payload.data;
            state.isLoading = false; 
            state.doneRegister=true;
             console.log("inUserSlicePayloadType: ",payload?.data?.type);
             console.log("inUserSlicePayload : ",payload);
            state.hasRecruiter= payload?.data?.type===JOB_RECRUITER?true:false;
            state.userExist=payload?.data.msg==="already exist"?true:false;    
            localStorage.setItem('emailId',JSON.stringify(emailId));       
            localStorage.setItem('isRecruiterOrNot',state.hasRecruiter);       
            localStorage.setItem('isValidOrNot',!(state.userExist));      
           
        })
        .addCase(validateUser.pending, (state)=> {
            state.isLoading = true;
        })
        .addCase(validateUser.rejected, (state)=> {
            state.isLoading = false;    
        })
        .addCase(validateUser.fulfilled, (state, {payload})=> {
            state.isLoading = false;
            state.isvalidUser=payload?.status==="valid"?true:false;
            state.hasRecruiter=payload?.type===JOB_RECRUITER?true:false;   
            localStorage.setItem('isValidOrNot',JSON.stringify(state.isvalidUser));         
            localStorage.setItem('isRecruiterOrNot', state.hasRecruiter);             
            localStorage.setItem('emailId',JSON.stringify(payload?.emailId));
            
        })
        .addCase(profile.pending, (state)=> {
            state.isLoading = true;
        })
        .addCase(profile.rejected, (state)=> {
            state.isLoading = false;    
        })
        .addCase(profile.fulfilled, (state, {payload})=> {
            state.isLoading = false;
            console.log(payload);
      
        })
    }
});

export const {reset }  = userSlice.actions;

export const {resetisvalid }  = userSlice.actions;


export default userSlice.reducer;
    