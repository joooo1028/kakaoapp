import React from 'react'
import { Link } from 'react-router-dom'

function ChatList({id,name,img,message}) {
  const now = new Date();
  const nowhours = now.getHours();
  const nowminutes = now.getMinutes();

  return (
    <>
    <li>
    <Link to="/chatting" state={{name,img}}>
      <span className='chats_img'><img src={img} alt={name} /></span>
      <span className='chats_cont'>
        <span className='chats_name'>{name}</span>
        <span className='chats_latest'>{message}</span>
      </span>
      <span className='chats_time'><span>{nowhours}</span>:<span>{nowminutes}</span></span>
    </Link>
    </li>
    </>
  )
}

export default ChatList