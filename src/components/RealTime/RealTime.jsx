import React, { useState, useEffect } from "react";
import * as signalR from "@microsoft/signalr";

function RealTime() {
  const [connection, setConnection] = useState(null);
  const [newMessage, setNewMessage] = useState("");
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const newConnection = new signalR.HubConnectionBuilder()
      .withUrl("https://localhost:7149/myhub")
      .build();

    newConnection.start().then(() => {
      setConnection(newConnection);
    });

    newConnection.on("ReceiveMessage", (message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    });
  }, []);

  const handleSendMessage = () => {
    connection.invoke("SendMessage", "123");
  };

  return (
    <div>
      <button onClick={handleSendMessage}>Send Message</button>
    </div>
  );
}

export default RealTime;