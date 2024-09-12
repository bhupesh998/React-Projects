import { createSlice } from '@reduxjs/toolkit'

const initialStateVar = {
  counterValue: 0,
}


export const counterSlice = createSlice({
  name: 'counter',
  initialState: initialStateVar,
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.counterValue += 1
      //above is the power or ability of redux as when we do const [val ,setVal] = useState(2), we cannot do val=val+1, we always use setVal
    },
    decrement: (state) => {
      state.counterValue -= 1
    },
    incByAmount: (state, action) => {
        console.log("state is--->", state);
        console.log("action is--->", action);
        
      state.counterValue += action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incByAmount } = counterSlice.actions

export default counterSlice.reducer