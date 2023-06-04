// import { legacy_createStore as createStore,combineReducers } from "redux";
// import { persistStore, persistCombineReducers ,persistReducer} from "redux-persist";
// import rootreducers from '../redux/reducers/rootreducers';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// const config = {
//     key: "root",
//     storage: AsyncStorage,
//   };


// const rootReducer1 = combineReducers({
//     rootreducers
//   })


//   const persistedReducer = persistReducer(config, rootReducer1)
// // let middlewares = [thunk];
// const store = createStore(
//     persistedReducer,
//     undefined,
//     // compose(applyMiddleware(...middlewares))
//   );
  
//   export const persistor = persistStore(store);    // making a store that persist the data into redux. 
//   export default store;



  import AsyncStorage from '@react-native-async-storage/async-storage'
import { legacy_createStore as  createStore   } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import rootreducers from './reducers/rootreducers'
// import thunk from "redux-thunk";

 
const persistConfig = {
  key: 'root',
  storage:AsyncStorage ,
  // whitelist: ["typeofUserReducer"] 

}
 
const persistedReducer = persistReducer(persistConfig, rootreducers)
// let middlewares = [thunk,logger];


export   let store = createStore(persistedReducer,undefined)
 export  let persistor = persistStore(store)