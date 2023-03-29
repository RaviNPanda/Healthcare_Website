import {createSlice} from '@reduxjs/toolkit';

export const Patient_data = createSlice({
    name:'Patient_data',
    initialState:{
        personal_data: {
        },
        medical_data:{}
    },
    reducers:{
        collectdata :(state,action)=>{
            state.personal_data = {
                ...action.payload
            }
        }
    }
})


export const {collectdata} = Patient_data.actions
export default Patient_data.reducer