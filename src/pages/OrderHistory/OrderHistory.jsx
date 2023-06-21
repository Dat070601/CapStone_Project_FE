import React from 'react'
import OrderHistoryViewModel from './OrderHistoryViewModel'
import OrderAccordion from '../../components/OrderHistory/OrderAccordion/OrderAccordion'
import { Box, Container } from '@chakra-ui/react'
import { COLOR } from '../../constant'

const OrderHistory = () => {

  const { orderHistories, handleDisposeOrder } = OrderHistoryViewModel()

  return (
    <Box bgColor={'gray.100'}>
      <Container my="50px" maxW={"container.xl"} height={"90vh"} overflow={"hidden"} overflowY={"auto"} border={`1px solid ${COLOR}`} borderRadius={10}>
        <Box color={COLOR}>
          {orderHistories.map(orderHistory => {
            return (
              <Box>
                {orderHistory.orderDetails?.map(orderDetail => {
                  return (
                    <OrderAccordion 
                      orderTitle={orderDetail?.bookName}
                      date={new Date(orderHistory?.orderDate).toDateString()}
                      paymentMethod={orderHistory?.paymentMethod}
                      messageOrder={orderHistory?.messageOrder}
                      phoneNumber={orderHistory?.phoneNumber}
                      address={orderHistory?.address}
                      city={orderHistory?.city}
                      district={orderHistory?.district}
                      price= {Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND'}).format(orderDetail?.price)}
                      status={orderHistory?.orderStatus}
                      handleDisposeOrder={() => handleDisposeOrder({ orderId: orderHistory?.orderId, statusName: "Đã Hủy" })}
                    />
                  )
                })}
              </Box>
            )
          })}
        </Box>
      </Container>
    </Box>
  )
}

export default OrderHistory