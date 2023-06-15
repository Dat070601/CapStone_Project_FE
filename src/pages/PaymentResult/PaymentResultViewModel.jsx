import React, { useEffect, useState } from 'react'
import * as signalR from "@microsoft/signalr";

const PaymentResultViewModel = () => {
 
  const [ loading, setLoading ] = useState(true)

  const [connection, setConnection] = useState(null);
  const [message, setMessages] = useState(null);

  useEffect(() => {
    const newConnection = new signalR.HubConnectionBuilder()
    .withUrl("https://localhost:7149/myhub")
    .build();

    newConnection.start().then(() => {
      setConnection(newConnection);
      newConnection.invoke("SendMessage", "Có một đơn hàng mới đã được đặt");
    });

    newConnection.on("ReceiveMessage", (message) => {
      setMessages(message);
    });
    const timeout = setTimeout(() => {
      setLoading(false)
    }, 4000)

    return () => {
      clearTimeout(timeout)
    }
  }, [])
  
  return {
    loading
  }
}

export default PaymentResultViewModel