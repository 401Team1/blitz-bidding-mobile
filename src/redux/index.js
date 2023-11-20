import { applyMiddleware, combineReducers, configureStore } from '@reduxjs/toolkit';
import auctionReducer from './Auction';
import itemReducer from './Item'
//import logger from './middlewares/logger';


const rootReducer = combineReducers({
    auction: auctionReducer,
    item: itemReducer
  });
  
  //middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),  
  export default configureStore({
    reducer: rootReducer, 
  });