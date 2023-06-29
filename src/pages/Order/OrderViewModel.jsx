import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { redirect, useNavigate, useParams } from 'react-router-dom'
import { getOrderByCustomerIdAsync } from '../../api/order'
import useLocalStorage from '../../hooks/useLocalStorage'
import { orderSelector } from '../../stores/reducers/OrderReducer'
import { paymentSelector } from '../../stores/reducers/PaymentReducer'
import { changeStatusOfOrderCashAsyncThunk, getOrderByCustomerIdAsyncThunk } from '../../stores/thunks/OrderThunk'
import { createPaymentAsyncThunk } from '../../stores/thunks/PaymentThunk'
import { changeStatusOfOrderAsyncThunk } from '../../stores/thunks/OrderThunk'
import { useDisclosure } from '@chakra-ui/react'

const OrderViewModel = () => {
  const dispatch = useDispatch()
  const params = useParams()
  const { order, isSuccessOfOrder } = useSelector(orderSelector)
  const { redirectUrl, isSuccess } = useSelector(paymentSelector)
  const { isOpen: isBuyProductSuccessModalOpen, onOpen: onBuyProductSuccessModalOpen, onClose: onCloseProductSuccessModalClose } = useDisclosure()
  const navigate = useNavigate()
  const [ loading, setLoading ] = useState(true)
  const { get } = useLocalStorage()
  const [ reUrl, setReUrl ] = useState("")
  const [isCancelLoading, setIsCancelLoading ] = useState(false)
  const accessTokenSaved = get({
    key: "accessToken"
  })

  useEffect(() => {
    setTimeout(() => {
      dispatch(getOrderByCustomerIdAsyncThunk({
        token: accessTokenSaved
      }))
    }, 1000)
    setLoading(false)
  }, [dispatch])

  const navigateToPaymentPage = async () => {
    dispatch(createPaymentAsyncThunk({
      orderId: order.orderId
    }))
  }

  const handleNavigateToBuyingSuccessPage = () => {
    navigate("/payment-success", { replace: false, state: { message: "Đặt hàng thành công" }})
  }

  const handleAcceptOrderWithShippingMethod = async ({ orderId, statusName }) => {
    dispatch(changeStatusOfOrderCashAsyncThunk({
      orderId,
      statusName
    }))
    setTimeout(() => {
      handleNavigateToBuyingSuccessPage()
    }, 2000)
  }

  useEffect(() => {
    if (isSuccess === true)
    {
      location.href = redirectUrl
    }

  }, [isSuccess, navigateToPaymentPage])

  const cancelOrder = ({ orderId, statusName }) => {
    setIsCancelLoading(true)
    dispatch(changeStatusOfOrderAsyncThunk({
      orderId,
      statusName
    }))
    if (isSuccessOfOrder == true)
    {
      setTimeout(() => {
        setIsCancelLoading(false)
        dispatch(getOrderByCustomerIdAsyncThunk({
          token: accessTokenSaved
        }))
      }, 2000)
    }
  }

  return {
    order,
    loading,
    navigateToPaymentPage,
    handleAcceptOrderWithShippingMethod,
    cancelOrder,
    isCancelLoading,
    isBuyProductSuccessModalOpen,
    onCloseProductSuccessModalClose
  }
}

export default OrderViewModel