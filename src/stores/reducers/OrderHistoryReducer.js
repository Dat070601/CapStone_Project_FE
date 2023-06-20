import { createSlice } from "@reduxjs/toolkit";
import { orderHistoryState } from "../initialState/OrderHistory";
import { fetchOrderHistoryForCustomerAsyncThunk, handleDisposeOrderAsyncThunk } from "../thunks/OrderHistoryThunk";

const orderHistorySlice = createSlice({
  name: "order-history",
  initialState: orderHistoryState,
  reducers: {
    resetState: (state, action) => {
      return {
        ...orderHistoryState,
        isOrderStatusDisposed: undefined
      }
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchOrderHistoryForCustomerAsyncThunk.fulfilled, (state, action) => {
      state.orderHistories = action.payload
    })
    builder.addCase(handleDisposeOrderAsyncThunk.fulfilled, (state, action) => {
      state.isOrderStatusDisposed = true
    })
  }
})

export const orderHistoryReducer = orderHistorySlice.reducer
export const orderHistorySelector = (state) => state.orderHistoryReducer
export const { resetState } = orderHistorySlice.actions