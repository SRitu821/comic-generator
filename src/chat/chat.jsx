import React, { useState } from 'react';

const Chat = ({ messages, onDelete }) => {
  const [selectedChat, setSelectedChat] = useState(null);

  const handleOpen = (index) => {
    setSelectedChat(index);
  };

  const handleClose = () => {
    setSelectedChat(null);
  };

  return (
    <div className="chat-container">
      {messages.map((message, index) => (
        <div key={index} className="chat-message">
          <p>{message.text}</p>
          <button onClick={() => handleOpen(index)}>Open</button>
          <button onClick={() => onDelete(index)}>Delete</button>
        </div>
      ))}
      {selectedChat !== null && (
        <div className="selected-chat">
          <button onClick={handleClose}>Close</button>
          {messages[selectedChat].images.map((image, index) => (
            <img
              key={index}
              src={URL.createObjectURL(image.image)}
              alt={`Comic Panel ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Chat;
