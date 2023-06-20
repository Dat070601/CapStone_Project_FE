import React from 'react'
import OrderHistoryViewModel from './OrderHistoryViewModel'
import OrderAccordion from '../../components/OrderHistory/OrderAccordion/OrderAccordion'
import { Box, Container } from '@chakra-ui/react'
import { COLOR } from '../../constant'

const OrderHistory = () => {

  const { orderHistories, handleDisposeOrder } = OrderHistoryViewModel()

  return (
    <Container my="50px" maxW={"container.xl"}>
      <Box border={"1px solid"} color={COLOR}>
        {orderHistories.map(orderHistory => {
          return (
            <>
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
                    price={orderDetail?.price}
                    status={orderHistory?.orderStatus}
                    handleDisposeOrder={() => handleDisposeOrder({ orderId: orderHistory?.orderId, statusName: "Đã Hủy" })}
                  />
                )
              })}
            </>
          )
        })}
      </Box>
    </Container>
  )
}

export default OrderHistory