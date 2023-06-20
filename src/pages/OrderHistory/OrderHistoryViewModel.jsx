import React from 'react'
import OrderAccordion from '../../components/OrderHistory/OrderAccordion/OrderAccordion'
import { useDispatch, useSelector } from 'react-redux'
import { orderHistorySelector, resetState } from '../../stores/reducers/OrderHistoryReducer'
import { useEffect } from 'react'
import { fetchOrderHistoryForCustomerAsyncThunk, handleDisposeOrderAsyncThunk } from '../../stores/thunks/OrderHistoryThunk'
import useLocalStorage from '../../hooks/useLocalStorage'

const OrderHistoryViewModel = () => {

  const dispatch = useDispatch()
  const { orderHistories, isOrderStatusDisposed } = useSelector(orderHistorySelector)
  const { get } = useLocalStorage()

  const accessToken = get({
    key: "accessToken"
  })
  
  useEffect(() => {
    dispatch(fetchOrderHistoryForCustomerAsyncThunk({
      token: accessToken
    }))
  }, [])

  const handleDisposeOrder = ({ orderId, statusName }) => {
    dispatch(handleDisposeOrderAsyncThunk({
      token: accessToken,
      orderId,
      statusName
    }))
  }

  useEffect(() => {
    if (isOrderStatusDisposed === true) {
      dispatch(fetchOrderHistoryForCustomerAsyncThunk({
        token: accessToken
      }))
    }
    return () => {
      dispatch(resetState())
    }
  }, [isOrderStatusDisposed])

  return {
    orderHistories,
    handleDisposeOrder        
  }
}

export default OrderHistoryViewModel