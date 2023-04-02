import {createSlice} from '@reduxjs/toolkit';

export const Patient_data = createSlice({
    name:'Patient_data',
    initialState:{
        islogin : false,
        personal_data: {
        },
        medical_data:{}
    },
    reducers:{
        collectdata :(state,action)=>{
            state.personal_data = {
                ...action.payload
            }
        },
        loginupdate:(state)=>{
            state.islogin = !state.islogin;
        }
    }
})


export const {collectdata,loginupdate} = Patient_data.actions
export default Patient_data.reducer