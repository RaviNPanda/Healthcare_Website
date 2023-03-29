import { combineReducers, configureStore} from '@reduxjs/toolkit'

//call reducers
import Patient_data_Reducer from './Patient_data';


const rootReducer = combineReducers({
    Patient_data : Patient_data_Reducer,
})

//created store with reducers
export default configureStore({reducer:rootReducer})