import { createSlice } from '@reduxjs/toolkit'
import { getCurrentUser } from './asyncAction'

const initialState = {
  value: 0,
}

export const counterSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
    extraReducers: (builder) => {
      builder.addCase(getCurrentUser.pending, (state) => {
          state.isLoading = true
      })
      builder.addCase(getCurrentUser.fulfilled, (state, action) => {
          state.isLoading = false
          state.currentUser = action.payload
      })
      builder.addCase(getCurrentUser.rejected, (state, action) => {
          state.isLoading = false;
          state.isLoggedIn = false;
          state.token = null
          state.errorMessage = action.payload?.message
      })
  }
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer