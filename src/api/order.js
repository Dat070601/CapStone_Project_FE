import axios from 'axios'

const addOrderAsync = async (url, token, data) => {
  try {
    const response = await axios({
      method: "POST",
      headers: {
        "Authorization": `bearer ${token}`
      },
      url: `${url}/api/order`,
      data
    })
    return response.data
  } catch (error) {
    console.log(error)
  }
}

const getOrderAsyncById = async (url, { id }) => {
  try {
    const response = await axios.get(`${url}/api/order/${id}`)
    return response.data
  } catch (error) {
    console.log(error)
  }
}

const getOrderByCustomerIdAsync = async (url, token) => {
  try {
    const response = await axios.get(`${url}/api/order/order-from-customer`, {
      headers: {
        Authorization: `bearer ${token}`
      }
    })
    return response.data
  } catch (error) {
    console.log(error)
  }
}

const changeStatusOfOrderAsync = async (url, { orderId, statusName }) => {
  try {
    const response = await axios.put(`${url}/api/order/status/${orderId}`, {
      statusName
    })
    return response.data
  } catch (error) {
    console.log(error)
  }
}

const changeStatusOfOrderCashAsync = async (url, { orderId, statusName }) => {
  try {
    const response = await axios.put(`${url}/api/order/status/${orderId}/cash`, {
      statusName
    })
    return response.data
  } catch (error) {
    console.log(error)
  }
}

export { 
  addOrderAsync,
  getOrderAsyncById,
  getOrderByCustomerIdAsync,
  changeStatusOfOrderAsync,
  changeStatusOfOrderCashAsync
}