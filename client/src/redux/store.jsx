import { combineReducers, configureStore} from '@reduxjs/toolkit'
import storage from 'redux-persist/lib/storage';
import {persistReducer} from 'redux-persist';

//call reducers
import Patient_data_Reducer from './Patient_data';
// import  from './Patient_data.jsx';

const persistConfig = {
    key:"root",
    version:1,
    storage,
    whitelist: ['Patient_data.islogin'],
}

const reducer = combineReducers({
    Patient_data : Patient_data_Reducer,
})

const persistedReducer = persistReducer(persistConfig, reducer);


//created store with reducers
export default configureStore({reducer:persistedReducer})