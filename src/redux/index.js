import { applyMiddleware, combineReducers, configureStore } from '@reduxjs/toolkit';
import auctionReducer from './auction';
//import logger from './middlewares/logger';



const rootReducer = combineReducers({
    auction: auctionReducer,
  });
  
  //middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),  
  export default configureStore({
    reducer: rootReducer, 
  });