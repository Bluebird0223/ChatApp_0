import React from 'react'
import Cam from '../img/camera.png'
import Add from '../img/plus.png'
import More from '../img/more.png'
import MessagesChat from './MessagesChat'
import Input from './Input'
const Chat = () => {
  return (
    <div className='chat'>
      <div className="chatInfo">
        <span>name</span>
        <div className="chatIcons">
          <img src={Cam} alt="" />
          <img src={Add} alt="" />
          <img src={More} alt="" />
        </div>
      </div>
        <MessagesChat/>
        <Input/>
    </div>
  )
}

export default Chat