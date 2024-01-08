import { configureStore } from '@reduxjs/toolkit'

import counterReducer from "./Counter"
// import adminShowItemsMenuSlice from "./adminMenu"
// import showHeaderMenuSlice from './showHeaderMenu'



export default configureStore({
  reducer: {
    counter: counterReducer,
    // adminShowItemsMenu: adminShowItemsMenuSlice,
    // showHeaderMenu: showHeaderMenuSlice
  }
})