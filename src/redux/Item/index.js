import { createSlice } from '@reduxjs/toolkit';
import mockItemData from '../data/json/mockItemData.json';

const itemSlice = createSlice({
    name: 'item',
    initialState: {
      items: [{ 'test': 'testing'}],
      currentAuctionItem: null,
    },
    reducers: {
      setItems: ( state, action ) => {
        state.items = mockItemData;
        //console.log( 'Items Loaded.' );
      },
      setCurrentAuctionItem: ( state, action ) => {
        state.currentAuctionItem = action.payload;
      }
    }
  });

  /*
  Example async action:
  export const fetchProducts = () => async ( dispatch ) => {
    const response = await axios.get('https://api-js401.herokuapp.com/api/v1/products');
    dispatch( setList( response.data.results ));
  }
  */

  export const { setItems, setCurrentAuctionItem } = itemSlice.actions;
  
  export default itemSlice.reducer;