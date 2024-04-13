import { createSlice } from '@reduxjs/toolkit'
// const {createSlice,nanoid} = require('@reduxjs/toolkit')

const initialState = {
  value: 0,
  properties: []
}

export const CounterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1
    },
    addProperty: (state, action) => {
        let newProperty ={
          name:action.payload,
          id:nanoid(),
        } 
        state.properties.push(newProperty)
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount, addProperty } = CounterSlice.actions

export default CounterSlice.reducer