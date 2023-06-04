import { combineReducers } from 'redux';
import  { ManagewelcomeScreen,ChangeStackReducer, changeUserType } from './stackReducers';
import { cartReducers } from './productReducers';


export default combineReducers({
  ChangeStackReducer:ChangeStackReducer,
  ManagewelcomeScreen:ManagewelcomeScreen,
  changeUserType:changeUserType,
  cartReducers:cartReducers
});