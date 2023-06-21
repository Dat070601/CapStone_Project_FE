import React from 'react'
import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Heading, MenuButton, Text, Menu, MenuList, MenuItem, Button } from '@chakra-ui/react'
import { COLOR } from '../../../constant'

const OrderAccordion = ({ orderTitle, date, messageOrder, paymentMethod, phoneNumber, address, district, city, price, status, handleDisposeOrder }) => {
  return (
      <Accordion allowMultiple>
        <AccordionItem>
          <AccordionButton display={"flex"} justifyContent={"space-between"}>
            <Box px={"30px"} py={"30px"}>
              <Heading textAlign={"left"} fontSize={"3xl"} fontWeight={"thin"}>{orderTitle}</Heading>
              <Text textAlign={"left"} my="20px" fontWeight={"bold"} color={COLOR}>Đặt hàng ngày: {date}</Text>
            </Box>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel px={4} py={2}>
            <Box px={"30px"} py={"30px"}>
              <Text>Tin nhắn đặt hàng: <Box as={"span"} fontWeight={"bold"}>{messageOrder === null || "" ? "Không có tin nhắn" : messageOrder}</Box></Text>
              <Text>Phương thức thanh toán: <Box as={"span"} fontWeight={"bold"}>{paymentMethod}</Box></Text>
              <Text>Số điện thoại: <Box as={"span"} fontWeight={"bold"}>{phoneNumber}</Box></Text>
              <Text>Địa chỉ: <Box as={"span"} fontWeight={"bold"}>{`${address}/${district}/${city}`}</Box></Text>
            </Box>
            <Box display={"flex"} justifyContent={"space-between"} mx="10px" my="20px">
              <Text fontSize={"20px"}>Tổng thanh toán: <Box as={"span"} fontWeight={"bold"}>{price}</Box></Text>
              <Text>Trạng thái: <Box as={"span"} fontWeight={"bold"}>
                <Menu>
                  <MenuButton disabled={status === "Chờ Xác Nhận" || status === "Đã Thanh Toán" ? false : true}>{status}</MenuButton>
                  <MenuList>
                    <MenuItem onClick={handleDisposeOrder}>
                      <Text>Hủy đơn hàng</Text>
                    </MenuItem>
                  </MenuList>
                </Menu>
              </Box></Text>
            </Box>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
  )
}

export default OrderAccordion