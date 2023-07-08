import { Box, Text, Icon, VStack, Spinner, Fade } from '@chakra-ui/react'
import { BsCheckCircle } from 'react-icons/bs'
import { COLOR } from '../../constant'
import React, { useEffect, useState, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import PaymentResultViewModel from './PaymentResultViewModel'
import Loading from '../../components/Loading'
import * as signalR from "@microsoft/signalr";
import NavbarViewModel from '../../components/Navbar/NavbarViewModel'

const PaymentResult = () => {

  const { loading } = PaymentResultViewModel()
  const [connection, setConnection] = useState(null);
  const { isSuccess, email, signOut, customerFullName, customerId, accessTokenSaved, navigateToCartPage } = NavbarViewModel();
  const connectionRef = useRef(null);
  useEffect(() => {
    const newConnection = new signalR.HubConnectionBuilder()
    .withUrl("https://dat-bookstore.azurewebsites.net/myhub")
    .build();

    newConnection.start().then(() => {
      connectionRef.current = newConnection;
    });
    setConnection(newConnection);
    return () => {
      if (connectionRef.current) {
        connectionRef.current.stop();
        console.log("Disconnected from SignalR server");
      }
    };
  },[])
  useEffect(() => {
    const currentTime = new Date();
    const formattedTime = currentTime.toLocaleString('vi-VN', { hour12: false, year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit' });
    if (connectionRef.current && accessTokenSaved) {
      connectionRef.current.invoke("SendMessage", "vừa đặt hàng", customerFullName, formattedTime);
    }
  }, [connectionRef.current])

  return (
    <Box mt={"100px"} h={"50vh"}>
      {!loading ? <Fade in={!loading}><VStack>
        <Icon as={BsCheckCircle} width="300px" height={"50px"} color={COLOR} />
        <Text fontSize={"40px"} fontWeight={"light"} color="gray.700">Đặt hàng thành công</Text>
        <Text>Cảm ơn vì đã mua hàng cùng chúng tôi</Text>
        <Box>
          <Link to="/home" style={{ color: COLOR }}>Tiếp tục mua sắm</Link>
        </Box>
      </VStack></Fade>: <Loading />}
    </Box>
  )
}

export default PaymentResult