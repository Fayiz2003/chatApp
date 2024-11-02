import React, { useState } from 'react';
import socket from '../socket';
import ChatHeader from './ChatHeader';
import ChatMessages from './ChatMessages';



const ChatInput = () => {
  const [name, setName] = useState('');
  const [isNameSet, setIsNameSet] = useState(false);

  const handleSetName = () => {
    if (name) {
      setIsNameSet(true); // Confirm name input
    }
  };

  


  return (
    <div  >

      {
        !isNameSet ?
          <div className="d-flex flex-column justify-content-center align-items-center">
            <h1 className="fw-bolder text-danger"style={{fontFamily:"monospace"}}>CHAT APP</h1>
            <img src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExbDUyZjNuN3BkcDc0YmdrMTVtZnl5ZXcxZ2ZzbnNjOWVwMmkzNGxvayZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/26FPJGjhefSJuaRhu/giphy.webp" alt="" />
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name..."
            />
            <button className='mt-3 px-3 fw-bolder btn btn-danger' onClick={handleSetName}>Login</button>
          </div>

          :
          <div className='w-100' >
            <ChatHeader name={name}/>
            <ChatMessages name={name}/>


            
          </div>
      }
    </div>
  );
};

export default ChatInput;