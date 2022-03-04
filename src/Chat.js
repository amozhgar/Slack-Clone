import React, { useEffect, useState } from "react";
import "./Chat.css";
import { useParams } from "react-router-dom";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import InfoIcon from "@material-ui/icons/Info";
import { db } from "./firebase";
import Message from "./Message";
import ChatInput from "./ChatInput";
import { useCollection, useDocument } from "react-firebase-hooks/firestore";

function Chat() {
  const { roomId } = useParams();
  // console.log(roomId);
  // const [roomDetails, setRoomDetails] = useState(null);
  // const [roomMessages, setRoomMessages] = useState([]);
  const [roomDetails] = useDocument(
    roomId && db.collection("rooms").doc(roomId)
  );

  const [roomMessages, loading] = useCollection(
    roomId && db.collection("rooms").doc(roomId).collection("messages")
  );
  // useEffect(() => {
  //   console.log(roomId);
  //   console.log(roomMessages);
  //   // if (roomId) {
  //   //   db.collection("rooms")
  //   //     .doc(roomId)
  //   //     .onSnapshot((snapshot) => {
  //   //       console.log(snapshot.get());
  //   //       // setRoomDetails(snapshot.data());
  //   //     });
  //   // }
  //   console.log(roomDetails);

  // }, [roomId, loading]);

  return (
    <div className="chat">
      <div className="chat__header">
        <div className="chat__headerLeft">
          <h4 className="chat__channelName">
            <strong>#{roomDetails?.data().name}</strong>
            <StarBorderIcon />
          </h4>
        </div>
        <div className="chat__headerRight">
          <p>
            <InfoIcon /> Details
          </p>
        </div>
      </div>
      <div className="chat__messages">
        {roomMessages?.docs.map((doc) => {
          const { message, timestamp, user, userImage } = doc.data();
          console.log(message);
          return (
            <Message
              key={doc.id}
              message={message}
              timestamp={timestamp}
              user={user}
              userImage={userImage}
            />
          );
        })}
      </div>

      <ChatInput channelName={roomDetails?.data().name} channelId={roomId} />
    </div>
  );
}

export default Chat;
