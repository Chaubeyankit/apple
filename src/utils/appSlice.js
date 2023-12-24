import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   isCardOpen: false,
   isSearchBar : false,
}
const appSlice = createSlice({
   name: "app",
   initialState,
   reducers: {
      toggleMenu: (state) => {
         state.isCardOpen = !state.isCardOpen;
      },
      closeMenu: (state) => {
         state.isCardOpen = false;
      },
      toggleSearchbar : (state) =>{
         state.isSearchBar = !state.isSearchBar
      }
   }
})
export const { toggleMenu, closeMenu, toggleSearchbar} = appSlice.actions;
export default appSlice.reducer;