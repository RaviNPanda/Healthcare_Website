import {createSlice} from '@reduxjs/toolkit';

export const Patient_data = createSlice({
    name:'Patient_data',
    initialState:{
        islogin : true,
        personal_data: {},
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
        },
        deletedata:(state)=>{
            Object.keys(state.personal_data).forEach(key => {
                delete state.personal_data[key];
              });
        }
    }
})

export const {collectdata,loginupdate,deletedata} = Patient_data.actions
export default Patient_data.reducer