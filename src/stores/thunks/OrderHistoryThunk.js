import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchOrderHistoryForCustomerAsync, handleDisposeOrderAsync } from "../../api/orderHistory";
import { URL } from "../../constant";

export const fetchOrderHistoryForCustomerAsyncThunk = createAsyncThunk("order-history", async (payload) => {
  const { token } = payload
  const response = await fetchOrderHistoryForCustomerAsync(URL, { token })
  return response
}) 

export const handleDisposeOrderAsyncThunk = createAsyncThunk("dispose-order", async (payload) => {
  const { token, orderId, statusName } = payload
  const response = await handleDisposeOrderAsync(URL, {
    token,
    orderId,
    statusName
  })
  return response
})