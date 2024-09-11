import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counterSlice'

export const storeVal = configureStore({
  reducer: {
    // LHS you can give any name
    counterKey: counterReducer
  },
})