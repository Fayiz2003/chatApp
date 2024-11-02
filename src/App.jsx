
import { Provider } from 'react-redux'
import './App.css'
import chatStore from './redux/chatStore'

import { useEffect, useState } from 'react'
import socket from './socket'
import ChatInput from './components/ChatInput'


function App() {

  const [isGetStarted, setIsGetStarted] = useState(false)

  useEffect(() => {
    socket.connect()

    return () => {
      socket.disconnect()
    }
  }, [])

  return (
    <>
      <Provider store={chatStore}>
        <div className="d-flex flex-column justify-content-center align-items-center main" style={{ minHeight: "100vh" }}>
          {
            isGetStarted ?
              <div  className="d-flex flex-column justify-content-center align-items-center ">
              <ChatInput />
                
              </div>
              :
              <div className="d-flex flex-column justify-content-center align-items-center">
              <h1 className="fw-bolder text-danger" style={{fontFamily:"monospace"}}>CHAT APP</h1>
                <img src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExbDUyZjNuN3BkcDc0YmdrMTVtZnl5ZXcxZ2ZzbnNjOWVwMmkzNGxvayZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/26FPJGjhefSJuaRhu/giphy.webp" alt="" />
                <h3 className="fw-bolder">Chat with with your best ones</h3>
                <p>Communicate everyone quikly and easily</p>
                <button onClick={() => setIsGetStarted(true)} className='btn btn-danger mt-2 fw-bolder rounded-5 px-4'>GET STARTED</button>
              </div>
          }
        </div>

      </Provider>
    </>
  )
}

export default App
