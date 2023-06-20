import axios from 'axios'

export const fetchOrderHistoryForCustomerAsync = async (url, { token }) => {
  try {
    const response = await axios.get(`${url}/api/Order/order-history`, {
      headers: {
        Authorization: `bearer ${token}`
      }
    })
    return response.data
  } catch (error) {
    console.log(error)
  }
}

export const handleDisposeOrderAsync = async (url, { token, orderId, statusName }) => {
  try {
    const response = await axios.put(`${url}/api/order/status/${orderId}`, {
      statusName
    }, {
      headers: {
        Authorization: `bearer ${token}`
      }
    })
    return response.data
  } catch (error) {
    console.log(error)
  }
} 