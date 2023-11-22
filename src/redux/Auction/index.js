import { createSlice } from '@reduxjs/toolkit';
import mockMessageData from '../data/json/mockMsgData.json';
import mockItemData from '../data/json/mockItemData.json';

let mockItems = [...mockItemData];

function formatDateNow() {
  const now = new Date(Date.now());
  const year = now.getFullYear();
  const month = (now.getMonth() + 1).toString().padStart(2, '0');
  const day = now.getDate().toString().padStart(2, '0');
  const hours = now.getHours();
  const minutes = now.getMinutes().toString().padStart(2, '0');
  const seconds = now.getSeconds().toString().padStart(2, '0');

  // Determine AM or PM
  const ampm = hours >= 12 ? 'PM' : 'AM';

  // Convert hours to 12-hour format
  const formattedHours = hours % 12 || 12;

  const formattedDate = `${month}/${day}/${year} ${formattedHours}:${minutes}:${seconds} ${ampm}`;
  return formattedDate;
}

const auctionSlice = createSlice({
    name: 'auction',
    initialState: {
      auctionStarted: null, // will be set to value of Date.now() when admin starts auction
      maxBid: 0,
      maxBidder: '',
      currentItem: null,
      nextItem: null,
      messages: [],
    },
    reducers: {
      startAuction: (state, action) => {
        state.auctionStarted = Date.now();
        state.currentItem = mockItems.shift();
        state.nextItem = mockItems[0] || null;
        state.messages.push({ timestamp: formatDateNow(), user: 'System', message: 'Auction has started.' });
        console.log( 'Auction started:', state.currentItem ); //state.currentItem
      },
      endAuction: (state, action) => {
        state.messages.push({ timestamp: formatDateNow(), user: 'System', message: 'Auction has ended.' });
        console.log('Auction Ended. Winner is:', state.maxBidder);
        state.auctionStarted = '';
        state.maxBid = 0;
        state.maxBidder = '';
        state.currentItem = null;
      },
      sendBid: (state, action) => {
        const { bid, username } = action.payload;
        //bid < state.currentItem.reserve || 
        if ( bid <= state.maxBid ) {
          state.messages.push({ timestamp: formatDateNow(), user: 'System', message: 'Bid was not high enough.' });
          console.log('Bid was not high enough.');
        } else {
          state.maxBid = bid;
          state.maxBidder = username || 'user1234';
          state.messages.push({ timestamp: formatDateNow(), user: 'System', message: 'Bid recieved.' });
        }

        console.log(`Bid Recieved: ${bid} by ${state.maxBidder}`);
      },
      sendMessage: (state, action) => {
        state.messages.push({ timestamp: formatDateNow(), user: action.payload.username, message: action.payload.message });
        console.log('message sent.');
      },
    }
  });

  /*
  Example async action:
  export const fetchProducts = () => async ( dispatch ) => {
    const response = await axios.get('https://api-js401.herokuapp.com/api/v1/products');
    dispatch( setList( response.data.results ));
  }
  */

  export const { startAuction, endAuction, sendBid, sendMessage } = auctionSlice.actions;
  
  export default auctionSlice.reducer;