import React, { useEffect } from "react";
import axios from "axios";
const Chat = () => {
  const fetchdata = async () => {
    // const data = await axios.get('/chats');
    // console.log(data)
  };

  useEffect(() => {
    fetchdata();
  }, []);

  return <div>chat page</div>;
};

export default Chat;
